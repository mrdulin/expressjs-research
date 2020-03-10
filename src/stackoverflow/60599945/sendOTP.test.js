const request = require('supertest');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('GET /api/v1/auth/otp/generate', function() {
  it('should generate OTP', async () => {
    let stub = sinon.stub().resolves({
      error: null,
      data: { message: 'OTP sent' },
    });
    stub['@global'] = true;
    const app = proxyquire('./app', {
      './sendOTPOnPhone': stub,
    });
    const result = await request(app)
      .get('/api/v1/auth/otp/generate?phone=8576863491')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    sinon.assert.calledOnce(stub);
    console.log(result.body);
  });
});
