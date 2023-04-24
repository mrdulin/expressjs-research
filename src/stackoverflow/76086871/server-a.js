const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:3001',
  changeOrigin: true,
  logLevel: 'debug'
});
app.use(apiProxy);
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});