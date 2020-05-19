const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(port, () => console.log(`web server is listening on port ${port}`));
