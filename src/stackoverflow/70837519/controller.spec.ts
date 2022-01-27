import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('should redirect', () => {
  it('should pass with all valid', () => {
    const getpath = sinon.stub();
    getpath.withArgs('test:path').returns('fake user id');
    getpath.withArgs('test:path1').returns('fake user pass');

    const getsecId = sinon.stub();
    getsecId.withArgs('fake user id').returns('raj');
    getsecId.withArgs('fake user pass').returns('Otersg');

    const urlctl = proxyquire('./controller', {
      './conf': {
        userConf: getpath,
      },
      './auth': {
        userSec: getsecId,
      },
    });
    const req = {};
    const res = { redirect: sinon.stub() };
    urlctl.userInfo(req, res);

    sinon.assert.calledWithExactly(res.redirect, 302, 'https://mapuser.com?userId=raj&usersec=Otersg');
  });
});
