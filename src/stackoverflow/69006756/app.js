const express = require('express');

class CommunicationsApplication {
  constructor() {
    const port = 3000;
    this.app = express();
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    this.app.listen(port, () => {
      console.log(`Pure PM listening at http://localhost:${port}`);
    });
  }
}

module.exports = CommunicationsApplication;
