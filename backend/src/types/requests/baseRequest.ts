import { Request } from "express";

export interface BaseRequest<T = any> extends Request {
    body: T;
}