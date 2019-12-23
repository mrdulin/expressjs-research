const express = require("express");
const app = express();
const port = 8080;
const router = express.Router();
const session = require("express-session");

app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false
  })
);

app.get("/", function(req, res, next) {
  req.session.myname = "nathan";
  console.log(req.session.myname);
  res.sendStatus(200);
});

app.get("/me", function(req, res, next) {
  console.log(req.session.myname);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
