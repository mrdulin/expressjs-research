import auth from 'basic-auth';
import express from 'express';
import path from 'path';

import { logger } from '../utils';
import { config } from '../config';

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
  const indexPage: string = path.resolve(__dirname, './index.html');
  res.sendFile(indexPage);
});

app.get('/login', (req, res) => {
  const credentials: auth.BasicAuthResult | undefined = auth(req);
  if (!credentials || credentials.name !== 'novaline' || credentials.pass !== '123123') {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    res.end('Access granted');
  }
});

app.listen(config.PORT, () => {
  logger.info(`http server is listening on http://${config.HOST}:${config.PORT}`);
});
