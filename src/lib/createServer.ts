import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes";
import path from "path";
import { errorMiddleware } from "../middlewares/error";
import cookieParser from "cookie-parser";
import { config } from "../config";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser(config.COOKIE_SECRET));
app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(process.cwd(), "public")));

router(app);
app.use(errorMiddleware);

export { app };
