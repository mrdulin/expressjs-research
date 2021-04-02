const express = require('express');
const path = require('path');
const request = require('request-promise');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const r = dotenv.config({ path: path.resolve(__dirname, './.env') });
if (r.error) {
  console.log(error);
  process.exit(1);
}

const app = express();
const port = 3000;
const appkey = process.env.APP_KEY;
const masterSecret = process.env.MASTER_SECRET;

if (!appkey) {
  console.error('appkey is empty');
}
if (!masterSecret) {
  console.error('master secret is empty');
}

const JVerificationAPI = {
  verify(token, phone, exID) {
    const url = 'https://api.verification.jpush.cn/v1/web/h5/verify';
    return request(url, {
      method: 'POST',
      auth: {
        user: appkey,
        pass: masterSecret,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        phone,
        exID,
      }),
    });
  },
};

app.use('/scripts', express.static(path.resolve(__dirname, '../../node_modules')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.post('/verify', async (req, res) => {
  const { token, phone, exID } = req.body;
  console.log(`verify phone = ${phone}, token = ${token}`);
  JVerificationAPI.verify(token, phone, exID).pipe(res);
});

app.listen(port, () => console.log(`backend service is listening on http://localhost:${port}`));
