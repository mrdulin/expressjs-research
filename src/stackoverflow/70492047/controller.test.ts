import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('shoud redirect', () => {
  let res: any;
  let req: any;

  beforeEach(() => {
    res = { redirect: sinon.stub() };
  });

  it('should redirect with valid url', () => {
    const uuidv4Stub = sinon.stub().returns('110ec58a-a0f2-4ac4-8393-c866d813b8d1');
    const urlctl = proxyquire('./controller', {
      uuid: { v4: uuidv4Stub },
    });
    urlctl.test(req, res);
    sinon.assert.calledWithExactly(
      res.redirect,
      302,
      'https://testurl/user?state=110ec58a-a0f2-4ac4-8393-c866d813b8d1',
    );
  });
});
