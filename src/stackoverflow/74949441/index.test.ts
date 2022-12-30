import sinon from 'sinon';
import { Client } from '@elastic/elasticsearch';
import { IndicesStatsResponse } from '@elastic/elasticsearch/lib/api/types';

describe('74949441', () => {
  it('should pass', async () => {
    const indicesStatsResponseStub: IndicesStatsResponse = {
      _shards: {
        failed: 0,
        successful: 1,
        total: 2,
      },
      _all: {
        uuid: '1',
      },
    };
    const indicesApiStub = {
      stats: sinon.stub().resolves(indicesStatsResponseStub),
    };
    sinon.stub(Client.prototype, 'indices').get(() => indicesApiStub);
    await import('./');
    sinon.assert.calledWithExactly(indicesApiStub.stats, { index: 'a' });
  });
});
