import express from 'express';
import bodyParser from 'body-parser';

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function createServer() {
  const app = express();
  const port = 3000;

  app.use(bodyParser.text({ limit: 10 * 1024 * 1024 /** 10MB */ }));
  app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    const contentLength = req.get('content-length');
    console.log('content length: ', formatBytes(contentLength));
    res.sendStatus(200);
  });

  return app.listen(port, () => {
    console.log(`HTTP server is listening to http://localhost:${port}`);
  });
}

export { createServer };
