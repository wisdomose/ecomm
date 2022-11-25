import { Application, Request, Response } from "express";

export function router(app: Application) {
  app.use("/health", (req: Request, res: Response) => {
    return res.status(200).send("API running");
  });
}
