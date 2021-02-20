const server = require('./app');
const chai = require('chai');
const path = require('path');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('66273169', () => {
  it('should pass', async () => {
    const email = 'test.email@gmail.com';
    const contact = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '9876543212',
    };

    const response = await chai
      .request(server)
      .post('/profile')
      .set('Content-Type', 'multipart/form-data')
      .attach('logo', path.resolve(__dirname, 'logo.png'))
      .field({
        email,
        name: 'All Tech Solutions',
        phone: '9812345678',
        contact: JSON.stringify(contact),
      });

    expect(response.body.status).to.equal('created');
    expect(response.body.profile.email).to.equal(email);
    expect(response.body.profile.logo).to.exist;
  });
});
