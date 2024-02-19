const sinon = require('sinon');
const dbutil = require('./dbutil');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('./app');

chai.use(chaiHTTP);
const { expect } = chai;

it('getallcurrency api = success 200', (done) => {
	sinon.stub(dbutil, 'sqlSelect').callsFake((sqlText, callback) => {
		callback({ id: 1, name: 'Test User', email: 'test@example.com' });
	});

	chai
		.request(app)
		.get('/allcurrency/1')
		.end((err, res) => {
			expect(res).to.have.status(200);
			expect(res.body).to.deep.equal({ id: 1, name: 'Test User', email: 'test@example.com' });
			done();
		});
});
