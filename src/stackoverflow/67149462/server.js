const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

process.env.JWT_TOKEN_SECRET = 'secret';
const port = process.env.PORT || 5000;

app.use(cors());

app.use(cookieParser());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/auth', (req, res) => {
  const user = { _id: '123' };
  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_TOKEN_SECRET);
  res.cookie('authcookie', accessToken);
  res.sendStatus(200);
});

app.get('/api', (req, res) => {
  console.log(req.cookies);
  jwt.verify(req.cookies.authcookie, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    console.log('decoded jwt: ', decoded);
    res.sendStatus(200);
  });
});

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));
