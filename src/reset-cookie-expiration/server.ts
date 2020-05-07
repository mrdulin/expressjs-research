import express from 'express';
import path from 'path';

const app = express();
const port = 4000;
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  const sid = '123';
  const expires = new Date(Date.now() + 60 * 1000);
  res.cookie('sid', sid, {
    httpOnly: true,
    expires,
  });
  res.sendStatus(200);
});

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));
