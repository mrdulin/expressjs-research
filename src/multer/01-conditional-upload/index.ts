import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer().single('file')

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/upload', (req, res) => {
  const count = 0;
  if (count > 0) {
    return res.status(200).json({ code: -1, message: 'There is a product with this name.' })
  }
  upload(req, res, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ code: -1, message: err.message })
    }
    res.status(200).json({ code: 0, message: null })
  })
})

app.listen(3000, () => console.log('Server listening on http://localhost:3000'))