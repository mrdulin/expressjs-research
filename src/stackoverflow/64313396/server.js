var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var json = {
  var1: 1,
  var2: 2,
  var3: 3,
};

io.on('connection', function() {
  io.send('message', json);
});

http.listen(3000, () => console.log('HTTP server is listening on port 3000'));
