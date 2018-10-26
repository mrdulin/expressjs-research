import express from 'express';
import http from 'http';
import path from 'path';

import { config } from '../../config';
import { logger } from '../../utils';
import { db } from './db';

function checkHttpReferrer(req, res, next) {
  const referrer = req.get('Referrer');
  logger.info({ label: 'referrer', message: referrer });
  let errMsg = '';
  if (!referrer) {
    errMsg = 'http referrer not found';
  }
  if (referrer.indexOf(`${config.HOST}:${config.PORT}`) === -1) {
    errMsg = 'invalid http referer';
  }
  if (errMsg) {
    logger.error(errMsg);
    return res.send(errMsg);
  }
  next();
}

async function main(): Promise<http.Server> {
  const app: express.Application = express();

  app.get('/', (req, res) => {
    const indexPage = path.resolve(__dirname, './index.html');
    res.sendFile(indexPage);
  });

  app.get('/transfer', checkHttpReferrer, (req, res) => {
    logger.info({ label: 'req.query', message: req.query });
    const { fromAccount, toAccount, amount } = req.query;
    const fromUser = db.users.find(user => user.name === fromAccount);
    const toUser = db.users.find(user => user.name === toAccount);
    const amountNumber = Number.parseInt(amount, 10);
    if (fromUser && toUser) {
      fromUser.amount -= amountNumber;
      toUser.amount += amountNumber;
      res.send(`transfer success! Result: ${JSON.stringify(db.users)}`);
    } else {
      res.status(500).send('User not found');
    }
  });

  return app.listen(config.PORT, () => {
    logger.info(`Http Server is now running on http://${config.HOST}:${config.PORT}`);
  });
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

export { main };
