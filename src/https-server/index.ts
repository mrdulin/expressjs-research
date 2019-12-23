import express from "express";
import http from "http";
import https from "https";
import path from "path";
import fs from "fs";
import cors from "cors";

import { logger } from "../utils";

interface IOptions {
  HTTP_PORT: number;
  HTTPS_PORT: number;
}

function main(opts: IOptions) {
  const app: express.Application = express();
  const serverOptions: https.ServerOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "../../ssl/key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "../../ssl/cert.pem"))
  };
  const httpServer: http.Server = http.createServer(app);
  const httpsServer: https.Server = https.createServer(serverOptions, app);

  app.use(cors());
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("normal");
  });

  httpServer.listen(opts.HTTP_PORT, () =>
    logger.info(
      `http server is listening on http://localhost:${opts.HTTP_PORT}`
    )
  );
  httpsServer.listen(opts.HTTPS_PORT, () => {
    logger.info(
      `https server is listening on http://localhost:${opts.HTTPS_PORT}`
    );
  });
}

main({ HTTP_PORT: 3000, HTTPS_PORT: 3001 });
