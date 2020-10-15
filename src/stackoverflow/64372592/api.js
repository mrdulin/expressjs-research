const express = require('express');
const router = express.Router();

router.post('/submit-student', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
