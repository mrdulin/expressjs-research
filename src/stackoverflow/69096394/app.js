const app = require('express')();
const server = require('http').createServer(app);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port);
