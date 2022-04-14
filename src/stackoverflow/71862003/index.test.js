const https = require('https');
const sinon = require('sinon');

describe('71862003', () => {
  it('should pass', () => {
    const item = { statusCode: 200 };
    sinon.stub(https, 'get').callsArgWith(1, item);
    https.get('https://localhost:3000/api', (response) => {
      console.log('response: ', response);
    });
    sinon.assert.calledWithExactly(https.get, 'https://localhost:3000/api', sinon.match.func);
  });
});
