const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: './public/upload',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10485760,
  },
});

app.get('/upload', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  const path = req.file.path.split('/').slice(1).join('/');
  console.log(path);
  res.sendStatus(200);
});

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
app.use(errHandler);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
