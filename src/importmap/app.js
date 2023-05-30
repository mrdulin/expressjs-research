const express = require('express')
const path = require('path');

const app = express();

app.use('/node_modules', express.static(path.resolve(__dirname, '../../node_modules')))
app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))