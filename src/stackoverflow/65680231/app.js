const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const app = express();

app.use(upload.none());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/auth/register', (req, res) => {
  res.send({ success: true, message: req.body });
});
const port = process.env.PORT || 3060;
app.listen(port, function listenHandler() {
  console.log(`Running on ${port}`);
});
