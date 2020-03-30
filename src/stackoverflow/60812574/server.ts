import express from 'express';
import multer from 'multer';

const app = express();
const port = 3000;
const upload = multer();
app.post('/user/login', upload.none(), (req, res) => {
  console.log('username:', req.body.username);
  console.log('password:', req.body.password);
  console.log('content-type:', req.get('Content-Type'));
  console.log('x-api-key:', req.get('x-api-key'));
  res.sendStatus(200);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`HTTP server is listening on http://localhost:${port}`);
  });
}

export { app };
