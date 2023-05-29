import express from 'express';
import multer from 'multer';

const app = express();

const upload = multer();

app.post('/', upload.array('files'), (req, res) => {
  console.log('body: ', req.body)
  console.log('files:', req.files)
  res.sendStatus(200)
})

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))