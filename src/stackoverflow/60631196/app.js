const express = require('express');
const app = express();
const auth = require('./middlewares/auth');
const { UserAddress } = require('./models');

app.get('/api/v1/user/addresses', auth, async (req, res) => {
  const addrs = await UserAddress.findAll();
  res.json(addrs);
});

module.exports = app;
