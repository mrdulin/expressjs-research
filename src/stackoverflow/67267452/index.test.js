const sinon = require('sinon');
const expect = require('chai').expect;
const $ = require('jquery');
const { getData, showProgressBars } = require('./');

describe('Progress', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should call getJSON', async () => {
    const data = 'teresa teng';
    const getJSONStub = sinon.stub($, 'getJSON').resolves(data);
    const res = await getData();
    expect(res).to.be.equal('teresa teng');
    sinon.assert.calledOnce(getJSONStub);
  });

  it('should get data success', () => {
    const data = 'teresa teng';
    const mJqXHR = {
      done: sinon.stub().callsFake(function (callback) {
        callback(data);
        return this;
      }),
      fail: sinon.stub(),
    };
    const getJSONStub = sinon.stub($, 'getJSON').returns(mJqXHR);
    showProgressBars();
    sinon.assert.calledOnce(getJSONStub);
    sinon.assert.calledWithExactly(mJqXHR.done, sinon.match.func);
  });

  it('should handle error if get data fail', () => {
    const mErr = new Error('network');
    const mJqXHR = {
      done: sinon.stub().returnsThis(),
      fail: sinon.stub().callsFake(function (callback) {
        callback(mErr);
      }),
    };
    const getJSONStub = sinon.stub($, 'getJSON').returns(mJqXHR);
    showProgressBars();
    sinon.assert.calledOnce(getJSONStub);
    sinon.assert.calledWithExactly(mJqXHR.fail, sinon.match.func);
  });
});
