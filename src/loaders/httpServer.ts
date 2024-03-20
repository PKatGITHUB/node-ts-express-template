import { createServer } from "http";
import express from "express";
import cors from "cors";
import routes from "../routes/index";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use("/api", routes);

const httpServer = createServer(app);

export { httpServer };
