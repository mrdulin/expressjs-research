const rewire = require('rewire');
const mod = rewire('./handler');
const { expect } = require('chai');

describe('78694661', () => {
	it('should pass when a is true', (done) => {
		mod
			.__with__({
				doBusinessLogicA: async () => console.log('doBusinessLogicA fake implementation'),
			})(() => mod.handler({ a: true }))
			.then((r) => {
				expect(r).to.be.equal('response');
				done();
			});
	});

	it('should pass when a is false', (done) => {
		mod
			.__with__({
				doBusinessLogicB: async () => console.log('doBusinessLogicB fake implementation'),
			})(() => mod.handler({ a: false }))
			.then((r) => {
				expect(r).to.be.equal('response');
				done();
			});
	});
});
