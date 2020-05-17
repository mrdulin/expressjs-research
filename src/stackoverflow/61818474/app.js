const express = require('express');
const mws = require('./mws');
const app = express();

app.use(mws.authUser({ option1: '1', option2: '2' }));

app.post('/user', (req, res, next) => {
  res.json({ success: true });
});

module.exports = app;
