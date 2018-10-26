import express from 'express';
import http from 'http';
import exphbs from 'express-handlebars';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { config } from '../../config';
import { logger } from '../../utils';
import { db } from './db';

async function main(): Promise<http.Server> {
  const app: express.Application = express();
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(csurf({ cookie: true }));

  app.get('/', (req, res) => {
    res.render('index', { csrfToken: req.csrfToken() });
  });

  app.post('/transfer', (req, res) => {
    logger.info({ label: 'req.cookie', message: req.cookies });
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
