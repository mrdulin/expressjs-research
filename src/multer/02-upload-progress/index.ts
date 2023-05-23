import multer from 'multer';
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const upload = multer();

app.get('/', (req, res) => {
  fs.createReadStream(path.resolve(__dirname, 'index.html')).pipe(res);
})

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json({ code: 0 })
});

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))
