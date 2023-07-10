const sinon = require('sinon');
const { Client } = require('@elastic/elasticsearch');

describe('76653113', () => {
	it('should pass', async () => {
		const nodesApiMock = {
			stats: sinon.stub().resolves('ok'),
		};
		sinon.stub(Client.prototype, 'nodes').get(() => nodesApiMock);
		const { main } = require('./');
		const actual = await main();
		sinon.assert.match(actual, 'ok');
		sinon.assert.calledOnce(nodesApiMock.stats);
	});
});
