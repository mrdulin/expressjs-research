const https = require('https');
let endPoint = 'https://dog.ceo/api/breeds/list/all';

https
  .get(endPoint, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(JSON.parse(data).message);
      console.log(JSON.parse(data).status);
    });
  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
