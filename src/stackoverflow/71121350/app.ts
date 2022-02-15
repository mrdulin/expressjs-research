import express from 'express';

const app = express();

app.get('/heartbeat', (req, res) => {
  res.sendStatus(200);
});

export { app };
