import "reflect-metadata";

import { Container } from "typedi";
import Logger from "./loaders/logger";

import config from "./config";

import loaders from "./loaders";

function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var httpPort = normalizePort(config.port);

async function configureAndStartServer() {
  // Wait for loaders to initialize dependencies
  await loaders();
  Logger.info("Server pre-start initializations done.");

  const expressServer: any = Container.get("expressApp");
  expressServer.listen(httpPort);
}

configureAndStartServer();

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const PORT: string | number = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
// });
