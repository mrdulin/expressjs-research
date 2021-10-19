const unZip = require('./');
const fs = require('fs');
const sinon = require('sinon');
const unzipper = require('unzipper');

describe('69616649', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', async () => {
    sinon.stub(fs, 'mkdir').callsFake((path, callback) => {
      callback();
    });
    const rs = {
      pipe: sinon.stub().returnsThis(),
      on: sinon.stub().callsFake(function (event, callback) {
        if (event === 'close') {
          callback();
        }
      }),
    };
    sinon.stub(fs, 'createReadStream').returns(rs);
    sinon.stub(unzipper, 'Extract');
    const actual = await unZip('fakeFileContent', 'fakeFileContent');
    sinon.assert.match(actual, 'fakeFileContent');
    sinon.assert.calledWithExactly(fs.mkdir, 'fakeFileContent', sinon.match.func);
    sinon.assert.calledWithExactly(fs.createReadStream, 'fakeFileContent');
    sinon.assert.calledWithExactly(unzipper.Extract, { path: 'fakeFileContent' });
    sinon.assert.calledOnce(rs.pipe);
    sinon.assert.calledWithExactly(rs.on, 'close', sinon.match.func);
  });
});
