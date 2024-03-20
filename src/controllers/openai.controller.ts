import { Request, Response } from "express";
import Logger from "../loaders/logger";
import { testOpenaiService } from "../services/openai";

export const testOpenaiController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await testOpenaiService();

    res.status(200).json(response);
  } catch (error) {
    Logger.error(`Error scheduling: ${error}`);
    res.status(500).json({ error: "Failed to schedule" });
  }
};
