const express = require('express');
const path = require('path');
const mime = require('mime');
const fs = require('fs');

const app = express();

app.get('/uploads/preview', (req, res) => {
  res.sendFile(path.resolve(__dirname, './9827.html'));
});

app.get('/v2/uploads/preview', (req, res) => {
  var file = path.resolve(__dirname, './9827.html');

  var filename = path.basename(file);
  var mimetype = mime.getType(file);

  res.setHeader('Content-disposition', `inline; filename=${filename}`);
  res.setHeader('Content-type', `${mimetype}; charset=utf-8`);

  fs.createReadStream(file).pipe(res);
});

app.get('/uploads/download', (req, res) => {
  var file = path.resolve(__dirname, './9827.html');

  var filename = path.basename(file);
  var mimetype = mime.getType(file);

  res.setHeader('Content-disposition', `attachment; filename=${filename}`);
  res.setHeader('Content-type', mimetype);

  fs.createReadStream(file).pipe(res);
});

app.listen(8080, () => console.log('HTTP server is listening on http://localhost:8080'));
