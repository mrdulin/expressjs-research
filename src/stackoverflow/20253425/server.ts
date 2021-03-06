import express from 'express';
import rateLimit from 'express-rate-limit';
import http from 'http';

const port = 3000;
const limiter = new rateLimit({
  windowMs: 1000,
  max: 3,
  message: 'Max RPS = 3',
});

async function createServer(): Promise<http.Server> {
  const app = express();

  app.get('/place', limiter, (req, res) => {
    res.end('Query place success.');
  });

  return app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}

if (require.main === module) {
  createServer();
}

export { createServer };
