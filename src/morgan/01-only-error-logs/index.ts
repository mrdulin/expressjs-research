import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'error.log'), { flags: 'a' }),
  skip: (req, res) => res.statusCode < 400,
}))

app.get('/500', (req, res) => {
  res.sendStatus(500)
})
app.get('/404', (req, res) => {
  res.sendStatus(404)
})

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))