const express = require('express');
const app = express();
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

class AppFactory {
  createApp() {
    app.use(csurf({ cookie: true }));
    app.use(cookieParser());
    return app;
  }
}

module.exports = {
  AppFactory: AppFactory,
  app: app,
};
