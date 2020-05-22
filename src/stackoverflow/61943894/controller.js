const certificate = require('./certificate');

module.exports.getAuth = function(req, res) {
  if (certificate.certificate(req.body.ageText) != null && req.body.uName == 'prateek') {
    res.write('Hello Prateek');
    return res.end();
  }

  if (certificate.certificate(req.body.ageText) != null && req.body.uName != 'prateek')
    return res.send('You need to register first');

  if (certificate.certificate(req.body.ageText) == null) {
    res.write('You are not of required age');
    return res.end();
  }
};
