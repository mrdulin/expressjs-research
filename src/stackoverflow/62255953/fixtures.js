var chai = require('chai'),
  chaiHttp = require('chai-http');

exports.mochaGlobalSetup = function () {
  chai.use(chaiHttp);
  console.log('setup chaiHttp plugin');
};
