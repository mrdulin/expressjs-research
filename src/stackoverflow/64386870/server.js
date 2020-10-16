let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log('working');
});
app.get('/', function(request, respond) {
  respond.sendFile(__dirname + '/bmiCalculator.html');
});
app.post('/', function(req, res) {
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = (num1 / num2) * num2;
  res.send(result.toString());
});
