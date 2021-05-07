import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

const ignoreFiles = ['/svg2.svg', '/svg3.svg'];

app.use(function (req, res, next) {
  console.log(req.url);
  if (ignoreFiles.includes(req.url)) {
    return res.sendStatus(403);
  }
  next();
});
app.use(express.static(path.resolve(__dirname, 'svg_library')));

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));
