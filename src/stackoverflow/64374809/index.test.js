const proxyquire = require('proxyquire');
const sinon = require('sinon');
const { expect } = require('chai');

describe('64374809', () => {
  it('should pass', async () => {
    const axiosStub = sinon.stub().resolves('fake data');
    const { callValidateCookieApi } = proxyquire('./', {
      axios: axiosStub,
    });
    const actual = await callValidateCookieApi('sessionId');
    expect(actual).to.be.eql('fake data');
    sinon.assert.calledWithExactly(axiosStub, {
      method: 'post',
      url: undefined,
      headers: {
        Cookie: 'sessionId',
      },
    });
  });

  it('should handle error', async () => {
    const mErr = new Error('network');
    const axiosStub = sinon.stub().rejects(mErr);
    const { callValidateCookieApi } = proxyquire('./', {
      axios: axiosStub,
    });
    const actual = await callValidateCookieApi('sessionId');
    expect(actual).to.be.eql(mErr);
    sinon.assert.calledWithExactly(axiosStub, {
      method: 'post',
      url: undefined,
      headers: {
        Cookie: 'sessionId',
      },
    });
  });
});
