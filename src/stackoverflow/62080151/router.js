const express = require('express');
const router = express.Router();

const logger = console;

router.use('/logMessage', (req, res) => {
  try {
    logger.info(req.query.message);
    res.send({
      statusMessage: 'success',
    });
  } catch (err) {
    logger.error('error in logging');
    logger.error(err);
    res.send({
      statusMessage: 'failure',
    });
  }
});

module.exports = router;
