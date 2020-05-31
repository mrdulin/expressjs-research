const express = require('express');
const app = express();
const router = require('./router');

const port = 3000;
app.use(router);

if (require.main === module) {
  app.listen(port, () => console.log('server is listening on port:' + port));
}

module.exports = app;
