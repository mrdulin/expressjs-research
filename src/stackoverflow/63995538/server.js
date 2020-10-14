const express = require('express');
const { postgres_get_controller } = require('./controller');

const app = express();
const port = 3000;
app.get('/', postgres_get_controller);

app.listen(port, () => console.log('server start'));
