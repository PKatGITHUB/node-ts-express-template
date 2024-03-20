import express from "express";

const router = express.Router();

import openaiRouter from "./openai.routes";

router.use("/openai", openaiRouter);
export default router;
