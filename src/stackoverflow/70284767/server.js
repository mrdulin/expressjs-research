const express = require('express');

const PORT = 3000;
async function createServer() {
  const app = express();
  app.get('/', (req, res) => {
    res.send('hello world');
  });
  return app;
}

if (require.main === module) {
  createServer()
    .then((server) => {
      server.listen(PORT);
      console.info(`Server started on http://localhost:${PORT}`);
    })
    .catch((err) => {
      console.error('Startup failure.', { error: err });
      process.exit(1);
    });
}

module.exports = { createServer };
