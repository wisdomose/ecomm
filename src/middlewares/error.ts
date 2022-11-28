import { NextFunction, Request, Response } from "express";
import { Exception } from "../lib/exception";
import { logger } from "../lib/logger";

export function errorMiddleware(
  error: Exception,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    logger.error(error.message);
    return res
      .status(200)
      .json({
        code: error.code,
        message: error.message,
      })
      .end();
  } catch (error) {
    return res
      .status(200)
      .json({
        code: 500,
        message: "An error occured",
      })
      .end();
  }
}
