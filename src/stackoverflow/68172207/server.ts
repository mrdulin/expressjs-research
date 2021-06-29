import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;

const uploader = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, path.resolve(__dirname, './uploads/')),
    filename: (_req, file, cb) => {
      cb(null, file.fieldname);
    },
  }),
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.put('/test', uploader.single('avatar'), (req, res) => {
  console.log('body: ', req.body);
  console.log('file: ', req.file);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));
