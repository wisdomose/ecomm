import { NextFunction, Request, Response } from "express";
import { config, prisma } from "../../config";
import { Exception } from "../../lib/exception";
import { Schema } from "./users.schema";
import bcrypt from "bcrypt";

export class Users {
  async create(
    req: Request<{}, {}, Schema["Create"]["body"]>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const duplicateEmail = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });

      if (!!duplicateEmail)
        next(
          new Exception({
            message: "A user exists with this email",
          })
        );

      const duplicateContact = await prisma.user.findFirst({
        where: {
          contact: req.body.contact,
        },
      });

      if (!!duplicateContact)
        next(
          new Exception({
            message: "A user exists with this phone number",
          })
        );

      const salt = await bcrypt.genSalt(config.SALT);
      const hash = await bcrypt.hash(req.body.password, salt);

      prisma.user.create({
        data: { ...req.body, password: hash },
      });
      return res.status(200).end();
    } catch (error) {
      return res.end();
    }
  }

  async login(
    req: Request<{}, {}, Schema["Login"]["body"]>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        next(
          new Exception({
            message: "Invalid credentials",
            code: 404,
          })
        );
        return;
      }

      const match = await bcrypt.compare(req.body.password, user.password);

      if (!match) {
        next(
          new Exception({
            message: "Invalid credentials",
            code: 404,
          })
        );
        return;
      }
      // generate token
      // assign cookies
      return res.end();
    } catch (error) {
      return res.end();
    }
  }
}
