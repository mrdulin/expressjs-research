import sinon from 'sinon';

// service under test
const service = {
  find(db) {
    return new Promise((resolve) => {
      db.collection.find({}, (err, res) => {
        const results = res.project({ a: 1 }).limit(10).skip(0).toArray();
        resolve(results);
      });
    });
  },
};

describe('68483854', () => {
  it('should pass', async () => {
    const mockRes = {
      project: sinon.stub().returnsThis(),
      limit: sinon.stub().returnsThis(),
      skip: sinon.stub().returnsThis(),
      toArray: sinon.stub().returns('mock data'),
    };
    const mockDb = {
      collection: {
        find: sinon.stub().callsFake((where, callback) => {
          callback(null, mockRes);
        }),
      },
    };
    const actual = await service.find(mockDb);
    sinon.assert.match(actual, 'mock data');
    sinon.assert.calledWithExactly(mockRes.project, { a: 1 });
    sinon.assert.calledWithExactly(mockRes.limit, 10);
    sinon.assert.calledWithExactly(mockRes.skip, 0);
    sinon.assert.calledOnce(mockRes.toArray);
  });
});
