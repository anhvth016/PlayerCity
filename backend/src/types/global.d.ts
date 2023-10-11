// import { IUser } from "../../database/models/model.ts";

// declare global {
//     namespace Express {
//         interface Request {
//             user: IUser
//         }
//     }
// }

// export declare class Strategy extends PassportStrategy {
//     constructor(verify: VerifyCallback);
//     authenticate(this: StrategyCreated<this>, req: express.Request, options?: any): any;
// }

import type { IncomingMessage } from 'http';
import type { SessionData } from 'express-session';
import type { Socket } from 'socket.io';
import { IUser } from '../../database/models/model.ts';

declare module 'express-session' {
    interface SessionData {
    }
};

interface SessionIncomingMessage extends IncomingMessage {
    session?: SessionData,
    user? : IUser
};

export interface SessionSocket extends Socket {
    request: SessionIncomingMessage
};