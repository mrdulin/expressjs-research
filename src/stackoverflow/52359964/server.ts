import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;
const upload = multer({ dest: path.resolve(__dirname, 'uploads/') });
app.post('/upload', upload.single('avatar'), (req, res) => {
  console.log('file:', req.file);
  console.log('content-type:', req.get('Content-Type'));
  res.sendStatus(200);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`HTTP server is listening on http://localhost:${port}`);
  });
}

export { app };
