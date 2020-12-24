import chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Get /', () => {
  it('Should say hi there', async () => {
    expect(chai.request).to.be.a('function');
  });
});
