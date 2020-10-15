const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use('/api', api);

app.listen(port, () => console.log('server start'));
