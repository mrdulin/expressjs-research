const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, './public')));
app.use('/a', express.static(path.resolve(__dirname, './A/folder')));
app.use('/b', express.static(path.resolve(__dirname, './B/folder')));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, 'public') });
});

app.get('/a', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, 'A/folder') });
});

app.get('/b', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, 'B/folder') });
});

app.listen(port, () => {
  console.log('Running server on port ' + port);
});
