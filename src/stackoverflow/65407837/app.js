const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});
app.get('/js', (req, res) => {
  res.send('alert("Hello!")');
});

app.listen(3000, () => console.log('server started at port 3000'));
