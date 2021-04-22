import express, { Router } from 'express';

const app = express();
const port = 3000;

const router = Router();
router.route('/auth').get((req, res) => {
  res.send('auth');
});
router.route('/:id').get((req, res) => {
  res.send({ id: req.params.id });
});

app.use('/user', router);

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));
