const sinon = require('sinon');
const User = require('./user');
const controller = require('./controller');
const { expect } = require('chai');
describe('60220190', () => {
  it('should create and return user', async () => {
    sinon.stub(User, 'create').resolves(true);
    const actual = await controller.register();
    expect(actual).to.be.eq(true);
    sinon.assert.calledWithExactly(User.create, { username: 'kevin chuka' });
  });
});
