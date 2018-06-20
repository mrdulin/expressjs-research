const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
//https://stackoverflow.com/questions/13421701/how-to-get-nested-form-data-in-express-js
//需要设置extended: true
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body.user);
  res.send(req.body.user);
});

server.listen(3000, function () {
  console.log('服务器已启动，端口: ', 3000);
});
