const createError = require('http-errors');
const express = require('express');

function createApp(customRoute) {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', function(req, res) {
    res.status(200).send({
      message: 'API',
      data: {
        version: 'v1',
      },
    });
  });
  if (customRoute) {
    app.use(customRoute.route, customRoute.controller);
  }

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status).send({
      status: err.status,
      error: err,
    });
  });

  return app;
}

module.exports = createApp;
