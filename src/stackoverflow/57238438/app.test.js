const chai = require('chai');
const chaiHttp = require('chai-http');
const api = require('./app');

chai.use(chaiHttp);
const { assert } = chai;

describe('/myTest', () => {
  it('should work with valid data', (done) => {
    let data = {
      key: 'value',
    };

    chai
      .request(api)
      .post('/path')
      .send(data)
      .end((err, res) => {
        if (err) return done(err);
        let val = res.body.value;
        assert.ok(val);
        done();
      });
  });
});
