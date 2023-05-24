const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 6001;
const HOST = "localhost";
const API_URL = "https://jsonplaceholder.typicode.com";

const proxyOptions = {
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/api`]: '',
  },
}

app.use(createProxyMiddleware(proxyOptions));

app.listen(PORT, HOST, () => {
  console.log(`Proxy Started at ${HOST}:${PORT}`)
});
