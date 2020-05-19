const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects
io.sockets.on('connection', (socket) => {
  console.log('New Conncection...');
  io.sockets.emit('event', 'everyone');

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
