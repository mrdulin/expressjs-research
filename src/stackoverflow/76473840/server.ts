import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post('/api/login', (req, res) => {
  res.cookie('jwt', '123', { httpOnly: true })
  res.status(200).json({ message: 'Logged in successfully' });
})

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})