const auth = require('./controller');
const sinon = require('sinon');

describe('61943894', function() {
  afterEach(() => {
    sinon.restore();
  });
  it('should return required age message', function() {
    const mReq = {
      body: {
        ageText: null,
        uName: 'prateek',
      },
    };
    const mRes = {
      write: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
      end: sinon.stub(),
    };
    auth.getAuth(mReq, mRes);
    sinon.assert.calledOnceWithExactly(mRes.write, 'You are not of required age');
    sinon.assert.calledOnce(mRes.end);
  });

  it('should say hello', () => {
    const mReq = {
      body: {
        ageText: 29,
        uName: 'prateek',
      },
    };
    const mRes = {
      write: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
      end: sinon.stub(),
    };
    auth.getAuth(mReq, mRes);
    sinon.assert.calledOnceWithExactly(mRes.write, 'Hello Prateek');
    sinon.assert.calledOnce(mRes.end);
  });

  it('should return register message', () => {
    const mReq = {
      body: {
        ageText: 29,
        uName: '',
      },
    };
    const mRes = {
      write: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
      end: sinon.stub(),
    };
    auth.getAuth(mReq, mRes);
    sinon.assert.calledOnceWithExactly(mRes.send, 'You need to register first');
  });
});
