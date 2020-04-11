import request from 'supertest';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('61143580', () => {
  it('should throw error', (done) => {
    const { app } = require('./server');
    request(app)
      .get('/')
      .expect(500)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.text);
        sinon.assert.match(res.text, 'Internal server error');
        done();
      });
  });
  it('should get users', (done) => {
    const middlewaresStub = {
      getUserAuthenticated: sinon.stub().callsFake((var1, var2, var3) => {
        return async (req, res, next) => {
          next();
        };
      }),
    };
    const { app } = proxyquire('./server', {
      './middlewares': middlewaresStub,
    });
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        sinon.assert.match(res.body, [{ name: 'james' }, { name: 'jane' }]);
        sinon.assert.calledWithExactly(middlewaresStub.getUserAuthenticated, 'var1val', 'var2val', 'vrl3val');
        done();
      });
  });
});
