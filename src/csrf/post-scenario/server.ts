import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';

import { config } from '../../config';
import { logger } from '../../utils';
import { db } from './db';

async function main(): Promise<http.Server> {
  const app: express.Application = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    const indexPage = path.resolve(__dirname, './index.html');
    res.sendFile(indexPage);
  });

  app.post('/transfer', (req, res) => {
    logger.info({ label: 'req.body', message: req.body });

    const { fromAccount, toAccount, amount } = req.body;
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
