const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: './' });

app.post('/app-dev/us-central1/api/upload', upload.single('uploaded_file'), function (req, res) {
  console.log(req.file, req.body);
  res.sendStatus(200);
});

app.listen(5001, () => console.log('Server started at http://localhost:5001'));
