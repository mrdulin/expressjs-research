import express from 'express';

const app = express();

app.get('/backend', (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => console.log('server started at port 3000'));
