import express, { Router } from "express";
import { testOpenaiController } from "../controllers/openai.controller";
const router: Router = express.Router();

// action run
router.post("/test", testOpenaiController);

export default router;
