const express = require('express');
const path = require('path');
const app = express();
require('express-ws')(app);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

const port = 8080;
app.listen(port, () => {
  console.info(`HTTP server is listening on http://localhost:${port}`);
});
