const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    preflightContinue: true,
  }),
);

var port = 3000;
app.set('port', port);

app.get('/api/user', (req, res) => {
  const user = { name: 'express' };
  res.json(user);
});

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  console.log(error);
}

function onListening() {
  console.log(`Server is listening on port ${port}`);
}
