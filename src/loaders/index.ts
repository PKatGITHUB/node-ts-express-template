import dependencyInjectorLoader from "./dependency-injector";
import Logger from "./logger";

export default async () => {
  dependencyInjectorLoader();
  Logger.info("All loaders executed, proceeding to start server");
};
