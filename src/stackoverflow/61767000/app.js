const express = require('express');
const path = require('path');
const app = express();
const routers = require('./routers');

app.set('views', path.join(__dirname, 'views'));

app.use(routers);

app.listen(3000, () => console.log('HTTP server is listening on http://localhost:3000'));
