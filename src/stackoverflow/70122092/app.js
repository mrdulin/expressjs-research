const express = require('express');

const app = express();

app.get('/transfers/pending', (req, res) => {
  console.log(req.query);
  res.sendStatus(200);
});

module.exports = { app };
