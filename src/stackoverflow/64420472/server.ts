import express from 'express';
import correlator = require('express-correlation-id');

declare global {
  namespace Express {
    export interface Request {
      correlationId(): string;
    }
  }
}

const app = express();

app.use(correlator());
app.get('/', (req, res) => {
  req.correlationId();
});
