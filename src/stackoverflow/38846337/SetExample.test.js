const SetExample = require('./SetExample');
const Advertisements = require('./Advertisements');
const sinon = require('sinon');

describe('38846337', () => {
  describe('#createCandyBox', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('should handle error', async () => {
      const err = new Error('timeout');
      sinon.stub(SetExample, 'getCandies').withArgs('wrong url').rejects(err);
      sinon.stub(Advertisements, 'pushCandyBox');
      await SetExample.createCandyBox({ candyUrl: 'wrong url' });
      sinon.assert.calledWithExactly(SetExample.getCandies, 'wrong url');
      sinon.assert.calledWithExactly(Advertisements.pushCandyBox, { candyUrl: 'wrong url' }, {});
    });
  });
});
