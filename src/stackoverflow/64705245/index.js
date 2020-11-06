const s3 = require('./s3');

const fn1 = async () => {
  exports.fn2();
  return 'foo';
};

const fn2 = async () => {
  await exports.fn3();
  await exports.fn4();
};

const fn3 = async () => {
  await s3.upload(params).promise();
};

const fn4 = async () => {
  await s3.upload(params).promise();
};

exports.fn1 = fn1;
exports.fn2 = fn2;
exports.fn3 = fn3;
exports.fn4 = fn4;
