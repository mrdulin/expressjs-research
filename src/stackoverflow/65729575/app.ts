import express from 'express';
import Router from 'express-promise-router';
import bodyParser from 'body-parser';
const router = Router();
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(router);

router.post('/post', async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    throw new Error('Missing required fields: title or author');
  }
  const post = { title, author };
  res.json(post);
});

router.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
