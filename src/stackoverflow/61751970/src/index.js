const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

function renderHTML(path, response) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

app.get('/', function(req, res) {
  // renderHTML('./index.html', res);
  renderHTML(path.resolve(__dirname, './index.html'), res);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
