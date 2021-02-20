const express = require('express');
const multer = require('multer');
const path = require('path');
const upload = multer({ dest: path.resolve(__dirname, 'uploads/') });

const app = express();

app.post('/profile', upload.single('logo'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const profile = { email: req.body.email, logo: true };
  res.json({ status: 'created', profile });
});

module.exports = app;
