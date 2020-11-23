const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  let login = {};
  login.username = username;
  login.password = password;

  try {
    request.post(
      {
        header: { 'Content-Type': 'application/json-patch+json', 'accept ': 'application/json' },
        url: ' https://exmple',
        json: login,
      },
      function(error, response, body) {
        res.send('implementation');
      },
    );
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
