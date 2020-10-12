import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 8080;

app.get('/image', (req, res) => {
  console.log('internal server /image');
  res.setHeader('Content-Type', 'image/png');
  fs.createReadStream(path.resolve(__dirname, './image.png')).pipe(res);
});

app.listen(port, () => console.log('HTTP server is listening on port:', port));
