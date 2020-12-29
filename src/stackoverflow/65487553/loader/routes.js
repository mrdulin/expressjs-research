const router = require('express').Router();
const v1Router = require('../v1/router')(router);

module.exports = (app) => {
  app.use('/api/v1', v1Router);
};
