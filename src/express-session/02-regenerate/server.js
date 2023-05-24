const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
);

app.get('/', function (req, res, next) {
  if (req.session.uid) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>uid: ' + req.session.uid + '</p>');
    res.write('<p>loginTime: ' + req.session.loginTime + '</p>');
    res.write('<p>lastActive: ' + req.session.lastActive + '</p>');
    res.write('<p>expires in: ' + req.session.cookie.maxAge / 1000 + 's</p>');
    res.end();
  } else {
    res.end('welcome to the session demo. refresh!');
  }
});

app.get('/login', async (req, res, next) => {
  req.session.regenerate(function (err) {
    console.log('regenerate');
    req.session.uid = Math.random();
    req.session.loginTime = new Date();
    req.session.lastActive = new Date();
    res.sendStatus(200);
  });
});

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
