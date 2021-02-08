const rewire = require('rewire');
const sinon = require('sinon');

describe('stub', function () {
  let clock;
  before(() => {
    clock = sinon.useFakeTimers();
  });
  after(() => {
    clock.restore();
  });
  it('doSubTask should be called twice', async function () {
    const doSubTaskStub = sinon.stub();
    const mod = rewire('./');
    mod.__set__('doSubTask', doSubTaskStub);
    const promise = mod.doTask(2000);
    clock.tick(2010);
    await promise;
    sinon.assert.calledTwice(doSubTaskStub);
    sinon.assert.calledWithExactly(doSubTaskStub, 6000);
    sinon.assert.calledWithExactly(doSubTaskStub, 10000);
  });
});
