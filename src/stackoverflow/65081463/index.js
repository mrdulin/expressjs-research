const moment = require('moment');

function a() {
  return exports.b().add(1, 'days');
}

function b() {
  return moment.utc();
}

exports.a = a;
exports.b = b;
