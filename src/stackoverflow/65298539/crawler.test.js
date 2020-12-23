const chai = require('chai');
const sinon = require('sinon');
const readline = require('readline');
const expect = chai.expect;

function resetModules() {
  delete require.cache[require.resolve('./crawler')];
}

describe('65298539', () => {
  beforeEach(() => {
    resetModules();
  });
  afterEach(() => {
    sinon.restore();
  });
  it('should return url if it is valid', async () => {
    const readlineInterfaceStub = {
      question: sinon.stub().callsFake((query, callback) => {
        callback('https://toscrape.com/');
      }),
      close: sinon.stub(),
    };
    sinon.stub(readline, 'createInterface').returns(readlineInterfaceStub);
    const url = require('./crawler');
    const actual = await url.requestSiteURL();
    expect(actual).to.be.eql('https://toscrape.com/');
    sinon.assert.calledWithExactly(readlineInterfaceStub.question, 'Please type url: ', sinon.match.func);
    sinon.assert.calledOnce(readlineInterfaceStub.close);
  });

  it('should set default url if user enter "no"', async () => {
    const readlineInterfaceStub = {
      question: sinon.stub().callsFake((query, callback) => {
        callback('No');
      }),
    };
    sinon.stub(readline, 'createInterface').returns(readlineInterfaceStub);
    const url = require('./crawler');
    const actual = await url.requestSiteURL();
    expect(actual).to.be.eql('https://toscrape.com/');
    sinon.assert.calledWithExactly(readlineInterfaceStub.question, 'Please type url: ', sinon.match.func);
  });

  it('should recursive call', async () => {
    let callCount = 0;
    const readlineInterfaceStub = {
      question: sinon.stub().callsFake((query, callback) => {
        if (callCount === 0) {
          callCount++;
          callback('');
        } else {
          callback('No');
        }
      }),
    };
    sinon.stub(readline, 'createInterface').returns(readlineInterfaceStub);
    sinon.spy(console, 'log');

    const url = require('./crawler');
    const actual = await url.requestSiteURL();
    expect(actual).to.be.eql('https://toscrape.com/');
    sinon.assert.calledWithExactly(readlineInterfaceStub.question, 'Please type url: ', sinon.match.func);
    sinon.assert.calledWithExactly(
      console.log,
      'Please type in a valid URL (https://toscrape.com/) or type "no" to use base url.',
    );
  });
});
