// Order is matter, assign config to global firstly, then the controllers can access it.
global.env = {};
global.env.config = require('./config');

const express = require('express');
const server = express();
const userController = require('./userController');

server.get('/api/user', userController.getUser);

if (require.main === module) {
  const port = 3000;
  server.listen(port, () => {
    console.log(`HTTP server is listening on http://localhost:${port}`);
  });
}

module.exports = server;
