var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const data = ['a', 'b'];
  res.render('index', { list: data });
});

module.exports = { app };
