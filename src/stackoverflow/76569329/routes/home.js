const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/login.html'));
});

module.exports = router;
