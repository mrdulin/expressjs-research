const { expect } = require('chai');
const sinon = require('sinon');
const { usernameExists } = require('./user_db');
const db = require('./index.js');

describe('user db tests', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should return non-existed user', async () => {
    sinon.stub(db.user, 'findOne').resolves(false);
    const check = await usernameExists('');
    expect(check).to.be.false;
    expect(check === null).to.be.false;
    expect(check === undefined).to.be.false;
  });

  it('should return existed user', async () => {
    const fakeUser = { username: 'anna' };
    sinon.stub(db.user, 'findOne').resolves(fakeUser);
    const check = await usernameExists('');
    expect(check).to.be.deep.equal({ username: 'anna' });
  });
});
