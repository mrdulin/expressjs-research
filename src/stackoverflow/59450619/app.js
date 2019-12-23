const express = require('express');
const app = express();
const port = 8080;
const router = express.Router();
const session = require('express-session');
const fs = require('fs');
const path = require('path');

app.use(
  session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
  }),
);

app.get('/', function(req, res, next) {
  req.session.myname = 'nathan';
  console.log(req.session.myname);
  const htmlContent = fs.readFileSync(path.resolve(__dirname, './public/app.html')).toString();
  res.send(htmlContent);
});

app.get('/me', function(req, res, next) {
  console.log(req.session.myname);
  res.sendStatus(200);
});

app.get('/ajax', function(req, res) {
  console.log('req.session.myname: ', req.session.myname);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
