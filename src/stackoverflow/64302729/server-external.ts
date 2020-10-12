import express from 'express';
import request from 'request';

const app = express();
const port = 3000;

app.get('/image', (req, res) => {
  console.log('external server /image');
  res.setHeader('Content-Type', 'image/png');
  request.get(`http://localhost:8080/image`).pipe(res);
});

app.listen(port, () => console.log('HTTP server is listening on port:', port));
