export interface LogConfigI {
  // Used by Winston Logger
  logs: {
    level: string;
  };
  logLevels: Array<string>;
  logColors: {
    [params: string]: string;
  };
}

export interface FullConfigI extends LogConfigI {
  env: {
    current: string;
    PRODUCTION: string;
    DEVELOPMENT: string;
  };
  port: number;
  // Others
  [params: string]: any;
}
