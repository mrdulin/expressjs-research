const router = require('express').Router();
const documentRoutes = require('./documentRoutes');

router.use('/docs', documentRoutes);

module.exports = router;
