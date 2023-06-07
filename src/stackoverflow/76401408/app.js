const express = require('express');
const sessions = require('express-session');

const app = express();

app.use(sessions({
  secret: "secretthatwillbeputinenv",
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false
}));
app.get('/', (req, res) => {
  req.session.userId = 1;
  res.sendStatus(200);
})

app.get('/return', (req, res) => {
  console.log('userId: ', req.session.userId);
  if (req.session.userId) return res.json({ userId: req.session.userId });
  res.sendStatus(500)
})

module.exports = app;