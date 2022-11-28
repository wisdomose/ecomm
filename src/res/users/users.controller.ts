import { NextFunction, Request, Response } from "express";
import { Exception } from "../../lib/exception";

export class Users {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      return res.end();
    } catch (error) {
      return res.end();
    }
  }
}
