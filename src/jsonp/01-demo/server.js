const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/js/jsonp', (req, res) => {
  const data = { name: 'novaline', age: 23 };
  res.jsonp(data);
});

app.get('/js/json', (req, res) => {
  const data = { name: 'wanghui', age: 23 };
  res.json(data);
});

app.listen(3000);
