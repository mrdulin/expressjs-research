const expect = require('chai').expect;
const request = require('supertest');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('User Address /api/v1/user/addresses', function() {
  it('GET /api/v1/user/addresses', async () => {
    let authStub = sinon.stub().callsFake(function(req, res, next) {
      next();
    });
    authStub['@global'] = true;
    let findUserAddressStub = sinon.stub().resolves({
      id: 'Z',
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: 'Bengaluru',
      pincode: null,
      is_deleted: false,
      landmark: null,
      map_lat: null,
      map_lng: null,
      label: null,
      service_area_id: null,
    });
    const app = proxyquire('./app', {
      './middlewares/auth': authStub,
      './models': {
        UserAddress: {
          findAll: findUserAddressStub,
        },
      },
    });
    const result = await request(app)
      .get('/api/v1/user/addresses')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(findUserAddressStub.calledOnce).to.be.true;
    expect(result).to.be.a('Object');
  });
});
