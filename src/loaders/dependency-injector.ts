import { Container } from "typedi";
import LoggerInstance from "./logger";
import { httpServer } from "./httpServer";
// import { openai } from "./openai";
export default () => {
  try {
    Container.set("logger", LoggerInstance);
    LoggerInstance.info("Logger loaded and injected");
    // Container.set("openai", openai);
    // LoggerInstance.info("Open AI loaded and injected");
    Container.set("expressApp", httpServer);
    LoggerInstance.info("Express Server loaded and injected");
  } catch (e) {
    LoggerInstance.error("Error on dependency injector loader: %o", e);
    throw e;
  }
};
