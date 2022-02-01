const express = require('express');
const axios = require('axios');
const app = express();

app.get('/admins', async (req, res) => {
  const result = await axios.get('http://save');
  const sum = result.data.sum;
  res.json({ code: 200, sum });
});

module.exports = { app };
