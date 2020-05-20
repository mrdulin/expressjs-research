const chai = require('chai');
const chaiHttp = require('chai-http');
const createApp = require('./app');

chai.use(chaiHttp);
chai.should();

describe('API test', function() {
  it('GET/ Get root response', function(done) {
    const app = createApp();
    chai
      .request(app)
      .get('/api')
      .end((err, res) => {
        console.log('NORMAL', res.body);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('data');
        done();
      });
  });

  it('GET/ Get custom response', function(done) {
    const customRoute = {
      route: '/custom',
      controller: (req, res, next) => {
        res.status(200).send({
          customMessage: 'custom',
          customData: {
            version: 'v1',
          },
        });
      },
    };
    const app = createApp(customRoute);

    chai
      .request(app)
      .get('/custom')
      .end((err, res) => {
        console.log('CUSTOM', res.body);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('customMessage');
        res.body.should.have.property('customData');
        done();
      });
  });
});
