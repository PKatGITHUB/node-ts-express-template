import {
  format,
  transports,
  createLogger,
  config as winstonConfig,
} from "winston";
import _ from "lodash";
import config from "../config";

const developmentLogFormatter = format.printf(
  ({ level, message, timestamp }) => {
    return `${level}\t[${timestamp}] ${message}`;
  }
);

const LoggerInstance = createLogger({
  level: config.logs.level,
  levels: _.pick(winstonConfig.npm.levels, config.logLevels),
  transports: [new transports.Console()],
});

if (config.env.current !== config.env.PRODUCTION) {
  LoggerInstance.format = format.combine(
    format.errors({ message: true }),
    format.colorize({
      colors: config.logColors,
      level: true,
    }),
    format.splat(),
    format.timestamp(),
    developmentLogFormatter
  );
} else {
  LoggerInstance.format = format.combine(
    format.errors({ message: true }),
    format.splat(),
    format.timestamp(),
    format.json()
  );
}

export default LoggerInstance;
