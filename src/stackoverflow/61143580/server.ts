import express from 'express';
import { getUserAuthenticated } from './middlewares';

const app = express();
const port = 3000;

function getUsers(req, res) {
  const users = [{ name: 'james' }, { name: 'jane' }];
  res.json(users);
}

app.get('/', getUserAuthenticated('var1val', 'var2val', 'vrl3val'), getUsers);

app.use((err, req, res, next) => {
  res.status(500).send('Internal server error');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`HTTP server is listening on http://localhost:${port}`);
  });
}

export { app };
