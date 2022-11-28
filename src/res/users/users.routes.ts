import { Router } from "express";
import { schemaValidator } from "../../middlewares/schema validator";
import { Users } from "./users.controller";
import { UserSchema } from "./users.schema";

export function userRoutes() {
  const router = Router();

  const controller = new Users();

  router.post("/create", schemaValidator(UserSchema.create), controller.create);

  router.post("/login", schemaValidator(UserSchema.login), controller.login);

  return router;
}
