const express = require('express');
const app = express();

app.get('/url/:key', (req, res) => {
  const key = req.params.key;
  res.json({ Key: key, Cat: 'meow' });
});

module.exports = app;
