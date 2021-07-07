const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
