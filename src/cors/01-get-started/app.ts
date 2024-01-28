import express from 'express';

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
  console.log('test');
  res.status(202).json({ result: [1, 2] });
});

//Routes
app.use('/auth', router);

app.listen(5000, () => console.log('server listen at http://localhost:5000'));
