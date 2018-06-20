var auth = require('basic-auth');
var app = require('express')();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res) {
  var credentials = auth(req);
  console.log(credentials);

  if (!credentials || credentials.name !== 'novaline' || credentials.pass !== '123123') {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    res.end('Access granted');
  }
});

app.listen(3000, function() {
  console.log('Server is listen on port 3000');
});
