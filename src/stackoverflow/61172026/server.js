const express = require('express');
const UnoController = require('./UnoController');
const app = express();

app.get('/api/v1/game/uno/:id/info', UnoController.getGameInfo);

module.exports = app;
