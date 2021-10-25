import sinon from 'sinon';
import mysql from 'mysql';

describe('69702002', () => {
  it('should return a list of records when right inputs are given', async () => {
    sinon.stub(process, 'env').value({
      HOST: '127.0.0.1',
      USER: 'testuser',
      PASSWORD: 'testpwd',
      PORT: '3306',
    });
    const { getRecords } = await import('./dbops');
    const dummyArray = [{ userid: 'xyz' }];

    let connectionStub = {
      query: sinon.stub().callsFake((sql, callback) => {
        callback(null, dummyArray);
      }),
      end: sinon.stub(),
    };
    sinon.stub(mysql, 'createConnection').returns(connectionStub);
    const actual = await getRecords('test input');
    sinon.assert.match(actual, ['xyz']);
    sinon.assert.calledWithExactly(mysql.createConnection, {
      host: '127.0.0.1',
      user: 'testuser',
      password: 'testpwd',
      port: 3306,
    });
    sinon.assert.calledOnce(connectionStub.end);
  });
});
