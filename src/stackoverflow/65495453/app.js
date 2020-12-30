const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});
app.post('/contact', upload.none(), (req, res) => {
  const name = req.body.name;
  console.log('name:', name);
  console.log('body:', req.body);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
