const express = require('express');
const app = express();
const spawn = require('child_process').spawn;
const path = require('path');

app.get('/get/price', async (req, res, next) => {
  const process = spawn('python', [path.resolve(__dirname, './model.py'), '1', '1', '1']);
  process.stdout.on('data', (data) => {
    const datastr = data.toString();
    res.status(200).send(`price is ${datastr}`);
  });
});

app.listen(3000, () => console.log('Server started at port 3000'));
