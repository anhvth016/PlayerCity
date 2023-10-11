import { ChatEventModel } from './database/models/model.js';
import { Server as SocketServer } from 'socket.io';
import { getOpenAiClient } from './src/ai/ai.js';
import { SOCKET_ACTION } from './src/utils/constants.js';
import { initSession, getConversationById, addMessageToConversation } from './src/services/chatService.js';
import { addEvent, getExecutedEvent, updateExecutedEvent } from './src/services/eventService.js';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';
import passport from './src/auth/auth.js';
import { sessionMiddleware } from './app.js';
/** FUNCTIONS to HANDLE SOCKET */
const doEmitEvent = (socket, event, timeout = 3000) => {
    console.log('execute broad cast');
    socket.timeout(timeout).emit(event.eventName, event, (err) => {
        if (err) {
            console.log(err);
            console.log(`timeout with ${event._id} === RETRY`);
            setTimeout(() => doEmitEvent(socket, event, timeout), 3000);
        }
    });
};
const broadcast = async (socket, eventId) => {
    const event = await ChatEventModel.findById(eventId);
    console.log('prepare to broad cast');
    if (event && !event.executed) {
        doEmitEvent(socket, event.toObject());
        event.executed = true;
        event.save();
    }
};
/**===================================================================== */
const onClientPushMessage = async (socket, arg) => {
    console.log('onClientPushMessage');
    const data = arg.payload;
    /**Get executed Event. If exist, skip */
    const executedEvent = await getExecutedEvent(arg._id);
    console.log('onClientPushMessage 2');
    if (executedEvent) {
        console.log(' === SKIP === Event was executed');
        return;
    }
    /**If event is new or unexecuted then add one */
    await addEvent(arg);
    // Receive new message from Socket
    const { sessionId, conversationId, message, setting } = data; // TODO May need userId
    const loggedUser = socket.request.user;
    let chatHistory = await initSession(sessionId, loggedUser, false); // TODO need way to retrieve user here
    if (!chatHistory) {
        // TODO throw error here.
        return;
    }
    console.log('onClientPushMessage 3');
    // Retrieve chat history from DB
    let conversation = await getConversationById(chatHistory, conversationId);
    if (!conversation) {
        // TODO throw error here.
        return;
    }
    console.log('onClientPushMessage 4');
    const userMessage = {
        _id: new mongoose.Types.ObjectId().toString(),
        content: message.content,
        // user: uuid(), // TODO set user and _id ?
        aiMessage: message.aiMessage,
        sentAt: Date.now()
    };
    console.log('onClientPushMessage 5');
    // Keep continue here.
    let previousMessages = [];
    const convertedExistsMessages = conversation.messages.map((mess) => ({
        // name: mess._id?.toString(),
        content: mess.content,
        role: mess.aiMessage ? 'assistant' : 'user'
    }));
    previousMessages.push(...convertedExistsMessages);
    previousMessages.push({ role: 'user', content: message.content });
    /**Change Language response*/
    const language = data.setting.language;
    const setLangMsg = {
        content: `When I ask for anything, please translate your response into ${language || 'English'} `,
        role: 'system'
    };
    const params = {
        model: 'gpt-3.5-turbo',
        messages: [setLangMsg, ...previousMessages]
    };
    // TODO pending call openAI API to mitigate limit_rate issued
    const aiRes = await getOpenAiClient().chat.completions.create(params);
    const aiMessage = {
        _id: new mongoose.Types.ObjectId().toString(),
        content: aiRes.choices[0].message.content || '',
        // user: uuid(), // TODO set user and _id ?
        aiMessage: true,
        sentAt: Date.now()
    };
    await addMessageToConversation(conversation, userMessage, aiMessage);
    await updateExecutedEvent(arg._id);
    console.log('onClientPushMessage 6');
    /**Server event */
    const eventId = `${Date.now()}_${sessionId}_${uuid()}`;
    await addEvent({
        _id: eventId,
        eventName: SOCKET_ACTION.CLIENT_MESSAGE_RECEIVE,
        payload: aiMessage
    });
    console.log('onClientPushMessage 7');
    /** Broadcast AI response to client */
    await broadcast(socket, eventId);
};
/**
 * CREATE SOCKET SERVER.
 * @param server
 */
// convert a connect middleware to a Socket.IO middleware
export const ioMiddlewareWrapper = (middleware) => (socket, next) => middleware(socket.request, {}, next);
const registerSocket = (server) => {
    const io = new SocketServer(server, {
        cors: {
            origin: true,
            credentials: true
        },
    });
    /** Authen middleware */
    io.use(ioMiddlewareWrapper(sessionMiddleware));
    io.use(ioMiddlewareWrapper(passport.initialize()));
    io.use(ioMiddlewareWrapper(passport.session()));
    io.use((socket, next) => {
        console.log('MIDDLEWARE');
        console.log(socket.request.user);
        console.log(socket.request.session);
        if (socket.request.user) {
            console.log('MIDDLEWARE- A: LOGGED IN');
            next();
        }
        else {
            console.log('MIDDLEWARE- B: NOT LOGGED IN');
            next();
        }
    });
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);
        console.log(socket.request.user);
        console.log(socket.request.session);
        socket.on('disconnect', (reason) => {
            console.log(`Client disconnected: ${reason}`);
        });
        socket.on(SOCKET_ACTION.CLIENT_MESSAGE_PUSH, (arg, cb) => {
            console.log('ackknowledge: ' + arg._id);
            // console.log(socket.request.user);
            // console.log(socket.request.session);
            // console.log(socket.request.session.passport);
            cb('SERVER_ACK + ' + arg._id);
            console.log('ack ok');
            onClientPushMessage(socket, arg);
        });
        socket.on('ping', (data, cb) => {
            cb('ack');
            console.log(`ping ${data}`);
        });
    });
};
export default registerSocket;
``;
//# sourceMappingURL=socketServer.js.map