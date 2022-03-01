const sinon = require('sinon');
const admin = require('firebase-admin');

describe('71267791', () => {
  it('should pass', async () => {
    const adminInitStub = sinon.stub(admin, 'initializeApp');
    const databaseService = {
      ref: sinon.stub().returnsThis(),
      set: sinon.stub(),
    };
    const databaseStub = sinon.stub().returns(databaseService);

    Object.defineProperty(admin, 'database', { get: () => databaseStub });
    const main = require('./');
    await main();
    sinon.assert.calledOnce(adminInitStub);
    sinon.assert.calledOnce(admin.database);
    sinon.assert.calledWithExactly(databaseService.ref, 'sm_matches/2902199/My_team/homeNGSPlayers');
    sinon.assert.calledWithExactly(databaseService.set, ['Nomran Mailer', 'Peter Bonetti']);
  });
});
