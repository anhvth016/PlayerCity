import { LANGUAGE } from "../utils/constants.js";


/**TYPE OF API DATA */


export type Message = {
    _id?: string;
    content: string;
    aiMessage: boolean;
    user?: string;
    sentAt: number;
}

export interface IConversation {
    _id: string;
    title: string;
    chatHistory: string;
    startAt: number;
    messages: Message[];
}

export type MessageSetting = {
    language: LANGUAGE;
}


export type MessagePayload = {
    sessionId: string;
    conversationId: string;
    message: Message;
    setting: MessageSetting;
}



