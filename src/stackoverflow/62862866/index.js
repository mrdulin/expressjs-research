const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });
app.post('/uploads/pics', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.sendStatus(200);
});

module.exports = app;
