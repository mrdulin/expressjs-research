const { expect } = require('chai');
const sinon = require('sinon');
const mongodb = require('mongodb');

describe('DBClient', function () {
	afterEach(function () {
		sinon.restore();
		delete require.cache[require.resolve('./db')];
	});

	it('should initialize and connect successfully', function (done) {
		const connectStub = sinon.stub(mongodb.MongoClient.prototype, 'connect').callsFake(function (cb) {
			cb(null); // No Error
		});

		const dbClient = require('./db');
		process.nextTick(() => {
			expect(dbClient.isAlive()).to.be.true;
			expect(connectStub.calledOnce).to.be.true;
			done();
		});
	});

	it('should fail to connect and isAlive returns false', function (done) {
		const connectStub = sinon.stub(mongodb.MongoClient.prototype, 'connect').callsFake(function (cb) {
			cb(new Error('Failed to connect'));
		});
		const dbClient = require('./db');

		process.nextTick(() => {
			expect(dbClient.isAlive()).to.be.false;
			expect(connectStub.calledOnce).to.be.true;
			done();
		});
	});
});
