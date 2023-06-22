const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.post('/my-endpoint', function (req, res) {
  res
    .cookie('my-cookie', 'abc123', {
      httpOnly: true,
      maxAge: 60 * 60 * 12 * 1000,
      // secure: true,
      sameSite: 'strict',
    })
    .sendStatus(200);
});

app.get('/my-other-endpoint', function (req, res) {
  console.log('my-cookie:', req.cookies['my-cookie']);
  if (!req.cookies['my-cookie']) {
    console.log('No cookie');
    res.sendStatus(401);
  } else {
    res.sendStatus(204);
  }
});

module.exports = app;
