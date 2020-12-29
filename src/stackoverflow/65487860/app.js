var bodyparser = require('body-parser');
var express = require('express');
var cors = require('cors');
var path = require('path');

var app = express();
const route = require('./routes/route');

//port number
const port = 3000;
//adding middleware -cors
app.use(cors());

//boday-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//add routes
app.use('/api', route);
//testing
app.get('/', (req, res) => {
  res.send('contactlist');
});

app.listen(port, () => {
  console.log('server started at port:' + port);
});
