const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  const filepath = path.resolve(__dirname, 'index.html');
  res.sendFile(filepath);
});

app.get('/js', (req, res) => {
  const filepath = path.resolve(__dirname, 'js.html');
  res.sendFile(filepath);
});

app.listen(3001);
