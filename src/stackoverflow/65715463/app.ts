//@ts-nocheck
import express from 'express';
import { errorHandler } from './errorHandler';
const app = express();

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use((req, res, next) => {
  const err = new Error('route not found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
