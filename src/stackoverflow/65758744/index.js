const app = require('express')();
const server = app.listen(4000, () => console.log('server started'));
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

io.on('connection', (socket) => {
  console.log(socket);
});

io.listen(server);
