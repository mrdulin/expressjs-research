import express from 'express';
import * as utils from './utils';

const app = express();
const port = 3000;

app.route('/url').post(utils.isSessionCookieValid, (req, res, next) => {
  res.sendStatus(200);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

export { app };
