const express = require('express');

const log = {
  debug: console.log,
};

function createServer() {
  const app = express();
  const MODULE_NAME = 'main';
  app.use((err, req, res, next) => {
    log.debug(`${MODULE_NAME}:ErrorHandler (ERROR) --> err: ${JSON.stringify(err)}`);
    res.status(err.status).json(err);
  });
}

module.exports = createServer;
