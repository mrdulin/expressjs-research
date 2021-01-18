import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const port = 3000;
app.set('port', port);
const server = http.createServer(app);
var io = new SocketIO(server);
io.on('connection', (socket) => {
  console.log('Socket connected');
});

server.listen(port, () => console.log(`API running on localhost:${port}`));
