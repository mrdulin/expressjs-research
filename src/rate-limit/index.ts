import express from 'express';
import rateLimit from 'express-rate-limit';
import http from 'http';

const port = 3000;
const createUserLimiter = new rateLimit({
  windowMs: 30 * 1000,
  max: 2,
  message: 'Too many users created from this IP, please try again after 30 seconds'
});

async function createServer(): Promise<http.Server> {
  const app = express();

  app.post('/create-user', createUserLimiter, (req, res) => {
    res.end('create user success.');
  });

  return app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}

export { createServer };
