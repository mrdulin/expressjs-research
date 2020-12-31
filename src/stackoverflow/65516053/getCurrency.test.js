const makeGetCurrency = require('./getCurrency');
const { expect } = require('chai');
const sinon = require('sinon');

describe('65516053', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  it('should retrieve currency', async () => {
    const retrieveCurrencyStub = sandbox.stub().resolves('fake currency conversion');
    const getCurrency = makeGetCurrency({ retrieveCurrency: retrieveCurrencyStub });
    const actual = await getCurrency(
      {
        query: { from: 'US', to: 'JAPAN', amount: 123 },
        ip: '127.0.0.1',
        headers: {
          'User-Agent': 'chrome',
          Referer: 'example.com',
        },
      },
      'my cache',
    );
    sandbox.assert.calledOnceWithExactly(retrieveCurrencyStub, {
      from: 'US',
      to: 'JAPAN',
      amount: 123,
      myCache: 'my cache',
    });
    expect(actual).to.deep.equal({ statusCode: 200, body: 'fake currency conversion' });
  });
});
