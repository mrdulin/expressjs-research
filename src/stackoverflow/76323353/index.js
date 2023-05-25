const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/platforms', (req, res) => {
  return res.send({ resp: 'hardcoded' });
});

// const server = app.listen(3000, () => console.log('Server up'));

module.exports = app