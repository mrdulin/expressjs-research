import express from 'express';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import faker from 'faker';
import cors from 'cors';

import { logger } from '../../utils';

function server() {
  const app = express();
  const PORT = 3000;

  const whitelist = ['http://localhost:4200'];
  app.use(
    cors({
      origin: whitelist,
      credentials: true
    })
  );
  app.use(cookieParser('cookie-secret'));
  app.use((req, res, next) => {
    console.log('cookies: ', req.cookies);
    console.log('req.headers: ', req.headers['x-csrf-token']);
    next();
  });
  app.use(csrf({ cookie: true }));
  // app.use((req, res, next) => {
  //   const csrfToken = req.csrfToken();
  //   res.cookie('XSRF-TOKEN', csrfToken);
  //   next();
  // });

  app.get('/', (req, res) => {
    res.sendStatus(200);
  });

  app.get('/csrftoken', (req, res) => {
    const csrfToken = req.csrfToken();
    console.log('csrfToken: ', csrfToken);
    res.json({ csrfToken });
  });

  app.post('/api/user', (req, res) => {
    const user = { name: faker.name.findName(), email: faker.internet.email() };
    res.json(user);
  });

  return app.listen(PORT, () => {
    logger.info(`Server is listening on http://localhost:${PORT}`);
  });
}

export { server };
