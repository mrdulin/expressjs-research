const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/api': '',
    },
  }),
);
app.use(
  '/xml',
  createProxyMiddleware({
    target: 'https://www.w3schools.com',
    changeOrigin: true,
    logLevel: 'debug',
  }),
);

app.listen(3000, () => console.log('server started at port 3000'));

const axios = require('axios');
const xml = `
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
      <Fahrenheit>75</Fahrenheit>
    </FahrenheitToCelsius>
  </soap12:Body>
</soap12:Envelope>
`;

axios({
  method: 'post',
  url: 'https://www.w3schools.com/xml/tempconvert.asmx',
  headers: {
    'Content-Type': 'application/soap+xml',
  },
  data: xml,
})
  .then((response) => console.log(response.data))
  .catch(console.error);
