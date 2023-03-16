const sinon = require('sinon');
const Database = require('./database');
const lamdbda = require('./handler.js');

describe('Test suite', () => {
  it('invoke lambda', () => {
    sinon.stub(Database.prototype, 'getRecordDetails').returns('{id: 1}');
    lamdbda.handler({ Records: [1] }, {}, (err, data) => {});
  });
});
