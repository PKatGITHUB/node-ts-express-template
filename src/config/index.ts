import dotenv from "dotenv";

dotenv.config();

import { FullConfigI } from "../interfaces/config";
import loggerConfig from "./logger.config";

const DEVELOPMENT_ENV = "development";
process.env.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT_ENV;

const config: FullConfigI = {
  env: {
    current: process.env.NODE_ENV,
    PRODUCTION: "production",
    DEVELOPMENT: DEVELOPMENT_ENV,
  },
  port: parseInt(process.env.PORT || "8008", 10),
  ...loggerConfig,
};
export default config;
