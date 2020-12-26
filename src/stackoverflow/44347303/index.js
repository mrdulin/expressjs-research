var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // res.render('/index', { list: data });
  const data = ['a', 'b'];
  res.json({ list: data });
});

module.exports = { app };
