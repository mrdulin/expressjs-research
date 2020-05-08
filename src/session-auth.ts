import session from 'express-session';
import faker from 'faker';

import { config } from './config';
import { logger } from './utils';

const sessionHandler = session({
  secret: config.COOKIE.SECRET,
  cookie: {
    maxAge: config.COOKIE.MAX_AGE,
    httpOnly: true,
    path: '/',
  },
  resave: false,
  saveUninitialized: false,
  store: new session.MemoryStore(),
});

const authHandler = (req, res, next) => {
  const user = { name: faker.name.findName(), email: faker.internet.email() };
  logger.info({ label: 'authHandler', message: `User ${user} auth successfully.` });
  req.sessions.user = user;
  next();
};

export { sessionHandler, authHandler };
