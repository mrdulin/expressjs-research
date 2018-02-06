const config = {
  PORT: process.env.PORT || 4000,
  HOST: process.env.HOST || 'localhost',

  COOKIE: {
    SECRET: process.env.COOKIE_SECRET || 'fuckbook',
    MAX_AGE: 60 * 60 * 1000
  }
};

export { config };
