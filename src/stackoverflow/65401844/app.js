const express = require('express');
const app = express();
const { Router } = express;

const vote = Router({ mergeParams: true });
vote.get('/', (req, res) => {
  console.log(req.params);
  res.sendStatus(200);
});

app.use('/bot/:id/vote', vote);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
