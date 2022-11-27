import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes";
import path from "path";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(process.cwd(), "public")));

router(app);

export { app };
