var express = require('express');
var router = express.Router();
var documentController = require('../controllers/documentController');

router.get('/community_service_log.docx', documentController.community_service_log);

module.exports = router;
