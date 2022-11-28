import { Router } from "express";
import { Users } from "./users.controller";

export function userRoutes() {
  const router = Router();

  const controller = new Users();

  router.post("/create", controller.create);

  return router;
}
