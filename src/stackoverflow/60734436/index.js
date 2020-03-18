var authHandler = require('./authenticationHandler');

exports.postloginValues = (req, res) => {
  var realEdUsername_Update = req.body.uName;
  var encodedPassword = Buffer.from(req.body.password).toString('base64');

  var jsonData = {
    loginName: realEdUsername_Update,
    userPassword: encodedPassword,
  };

  var parseData = JSON.stringify(jsonData);

  var result = authHandler.validateRealEdUser(parseData, res);
};
