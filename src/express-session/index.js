const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const port = 5775;
const { COOKIE_SECRET } = process.env;

app.use(cookieParser(COOKIE_SECRET));
app.use(
  session({
    secret: COOKIE_SECRET,
    name: 'fucking-app.sid',
    cookie: {
      httpOnly: true,
      path: '/',
      // 10秒sessionId过期, 刷新页面会重新设置一个sessionId
      maxAge: 10 * 1000,
      secure: false,
    },
    store: new session.MemoryStore(),
    resave: false,
    saveUninitialized: false,
  }),
);

app.use((req, res, next) => {
  console.log(req.signedCookies);
  console.log('SessionId:', req.sessionID);
  if (req.session.views) {
    req.session.views++;
    console.log('views: ', req.session.views);
  } else {
    req.session.views = 1;
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));
