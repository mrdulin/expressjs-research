const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('This is listening to the port');
});

const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${message}`);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});
module.exports = io;
