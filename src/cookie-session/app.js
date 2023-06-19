const cookieSession = require('cookie-session');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(
  cookieSession({
    name: 'session',
    secret: 'test',
    maxAge: 1 * 10 * 60 * 1000,
  }),
);

app.use(function (req, res, next) {
  req.session.nowInMinutes = Math.floor(Date.now() / 60e3);
  next();
});

app.get('/', function (req, res) {
  fs.createReadStream(path.resolve(__dirname, 'index.html')).pipe(res);
});
app.get('/user/:id', function (req, res) {
  req.sessionOptions.maxAge = 30 * 1000;
  res.sendStatus(200);
});

app.listen(3000, () => console.log('listening on port 3000'));
