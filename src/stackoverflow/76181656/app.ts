import express, { Router } from 'express';
import jsonServer from 'json-server';
import path from 'path';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
// const middlewares = jsonServer.defaults({
//   static: undefined,
// });

// server.use(middlewares);

const customRouter = Router();
customRouter.get('/', (req, res) => {
  res.send('Welcome on the ix interface API');
});
customRouter.get('/create-user', (req, res) => {
  res.status(201).json({ data: { name: 'teresa teng' } });
})
server.use(customRouter);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
)
server.use(router);

server.listen(PORT, () => {
  console.log('JSON Server is running')
})



