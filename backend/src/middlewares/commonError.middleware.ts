import { NextFunction, Request, Response } from "express";
import ApiError from "../types/apiError.js";
import mongoose from "mongoose";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found - URL : ${req.originalUrl}`);
  res.status(404);
  return next(error);
};

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = err.message;
  let statusCode =
    res.statusCode === 200 || res.statusCode === 201 ? 500 : res.statusCode;
  let detail: string[] = [];

  // Check Mongoose Error
  if (err instanceof mongoose.Error.CastError) {
    message = "Resource not found";
    statusCode = 404;
  }

  // Check API Error
  if (err instanceof ApiError) {
    statusCode = err.status;
    detail = err.detail || [];
  }

  res.status(statusCode).json({
    message: message,
    status: statusCode,
    detail,
    stack: process.env.NODE_ENV === "development" ? err.stack : "",
  });
};

export { notFoundHandler, errorHandler };
