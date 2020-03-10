const express = require('express');
const controller = require('./controller');

const app = express();
app.get('/api/v1/auth/otp/generate', controller);

module.exports = app;
