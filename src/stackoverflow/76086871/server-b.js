const express = require('express');

const app = express();

app.get('/api/stats/upwork_demo', (req, res) => {
  res.status(200).json({ data: [1, 2, 3] })
})

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});