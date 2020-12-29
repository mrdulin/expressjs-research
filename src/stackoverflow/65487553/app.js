const express = require('express');

const app = express();

// load routes
require('./loader/routes')(app);

app.listen(3000, () => console.log('server started at http://localhost:3000'));
