const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

var upload = multer({ dest: path.resolve(__dirname, 'uploads/') });

app.post('/enrich/json', upload.single('fileField'), async (req, res) => {
  return res.status(200).download(path.resolve(__dirname, 'file.jsonl'));
});

module.exports = app;
