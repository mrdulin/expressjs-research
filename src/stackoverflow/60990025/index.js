const express = require('express');
const server = express();
const userController = require('./userController');

global.env = {};
global.env.config = require('./config');

server.get('/api/user', userController.getUser);

if (require.main === module) {
  const port = 3000;
  server.listen(port, () => {
    console.log(`HTTP server is listening on http://localhost:${port}`);
  });
}

module.exports = server;
