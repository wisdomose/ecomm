import { Application, Request, Response } from "express";
import { logger } from "./logger";

export function router(app: Application) {
  app.use("/health", (req: Request, res: Response) => {
    logger.info(process.env.NODE_ENV + " here");
    // return res.status(200).send("API running");
    return res.render("pages/health");
  });
}
