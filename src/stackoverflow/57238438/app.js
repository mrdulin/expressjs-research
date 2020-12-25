const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post('/path', async function (req, res) {
  let data = req.body;
  let val = data.key;
  res.json({ value: val });
});

module.exports = app;
