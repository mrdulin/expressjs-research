const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('71144510', () => {
  it('should pass', () => {
    const res = { status: 200 };
    res.should.have.status(200);
  });
});
