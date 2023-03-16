import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);
app.post('/login', (req, res) => {
  const token = { username: 'ok' };
  res.cookie('jwt', token, { httpOnly: false, secure: false, maxAge: 24 * 60 * 60 * 1000 });
  res.json({ mes: 'You have login successfully', success: true, token: token });
});

app.listen(8080, () => console.log('Server is listening on http://localhost:8080'));
