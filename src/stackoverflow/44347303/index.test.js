var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./index');
var should = chai.should();
chai.use(chaiHttp);

describe('Homepage', function (done) {
  it('should render index view', function (done) {
    chai
      .request(server.app)
      .get('/')
      .end(function (err, res) {
        console.log(res.body);
        done();
      });
  });
});
