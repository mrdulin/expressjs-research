import express from 'express';
import http from 'http';
import exphbs from 'express-handlebars';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import { config } from '../../config';
import { logger } from '../../utils';
import { db } from './db';

async function main(): Promise<http.Server> {
  const app: express.Application = express();
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');
  app.use(cors({ origin: ['http://localhost:8080'], credentials: true }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.post('/login', csurf({ cookie: true, ignoreMethods: ['POST'] }), (req, res) => {
    const csrfToken: string = req.csrfToken();
    logger.info(`csrfToken: ${csrfToken}`);
    res.cookie('csrfToken', csrfToken);
    res.send('login success');
  });

  app.use(csurf({ cookie: true }));
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

  app.use((err, req, res, next) => {
    if (err.code !== 'EBADCSRFTOKEN') {
      return next(err);
    }
    res.status(403).send('invalid csrf token');
  });

  return app.listen(config.PORT, () => {
    logger.info(`Http Server is now running on http://${config.HOST}:${config.PORT}`);
  });
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

export { main };
