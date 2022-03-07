import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('get token', () => {
  let req: any;
  let res: any;
  beforeEach(() => {
    res = {
      send: sinon.stub(),
    };
  });

  it('should create token success', async () => {
    req = { body: { value: '123', name: 'teresa teng' } };
    let tokenStub = {
      getToken: sinon.stub().withArgs(req.body.name, req.body.value).resolves(),
    };

    let tokenctl = proxyquire('./controller', {
      './tokenUtil': tokenStub,
    });
    await tokenctl.userInfo(req, res);
    sinon.assert.calledWithExactly(res.send, { status: 'success', message: 'token creation success' });
  });

  it('should handle error when given empty name', async () => {
    const tokenValue = '123';
    req = { body: { value: tokenValue, name: '' } };
    const error = new Error('token creating fail');
    let tokenStub = {
      getToken: sinon.stub().withArgs('', tokenValue).rejects(error),
    };

    let tokenctl = proxyquire('./controller', {
      './tokenUtil': tokenStub,
    });
    await tokenctl.userInfo(req, res);
    sinon.assert.calledWithExactly(res.send, { status: 'Failue', message: error });
  });
});
