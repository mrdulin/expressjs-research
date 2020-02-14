const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

describe('60214679', () => {
  it('should pass', async () => {
    const urlBuilderInstanceStub = {
      buildURL: sinon.stub().returnsThis(),
      getShortenedURL: sinon.stub().resolves('fake data'),
    };
    const urlBuilderStub = sinon.stub().callsFake(() => urlBuilderInstanceStub);
    const main = proxyquire('./', {
      './urlBuilder': urlBuilderStub,
    });
    const actual = await main();
    expect(actual).to.be.eq('fake data');
    sinon.assert.calledWithExactly(urlBuilderStub, 'https://stackoverflow.com/');
    sinon.assert.calledWithExactly(urlBuilderInstanceStub.buildURL, {});
    sinon.assert.calledOnce(urlBuilderInstanceStub.getShortenedURL);
  });
});
