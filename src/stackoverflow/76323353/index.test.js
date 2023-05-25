const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('./')

const methodUrlBase = '/api/platforms'

describe('platforms', () => {
  let server;
  before((done) => {
    server = app.listen(3000, () => {
      console.log('started for testing');
      done();
    });
  });
  after(() => {
    server.close();
  });
  it('Should return platforms - works', async () => {
    const res = await chai.request(app)
      .get(methodUrlBase)
    expect(res.status).to.equal(200)
  })

  it('Should return platforms - doesn\'t work', async () => {
    const res = await chai.request('http://localhost:3000')
      .get(methodUrlBase)
    expect(res.status).to.equal(200)
  })
})