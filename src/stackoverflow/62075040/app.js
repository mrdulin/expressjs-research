const express = require('express');
const { check } = require('express-validator');
const app = express();
const port = 3000;

app.use(express.json());
app.post('/whatever', [check('somevariable').escape()], (req, res) => {
  console.log(req.body.somevariable);
});

app.listen(3000, () => console.log(`server listen port ${port}`));
