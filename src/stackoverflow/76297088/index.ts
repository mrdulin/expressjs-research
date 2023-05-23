import express, { Router } from 'express';

const app = express();

const router = Router();
const piecesRouter = Router({ mergeParams: true });

piecesRouter.get('/', (req, res) => {
  console.log(req.params);
  res.sendStatus(200)
})

router.use('/games/:gameId/pieces/', piecesRouter)

app.use(router);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))