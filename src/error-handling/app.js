const express = require('express');

const app = express();

app.get('/', function testController() {
  throw new Error('BROKEN');
})

app.listen(3000, () => console.log('Server started'))