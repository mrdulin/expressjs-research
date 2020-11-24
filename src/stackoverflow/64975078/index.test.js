const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('64975078', () => {
  it('should pass', () => {
    const cwlStub = {
      filterLogEvents: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves('teresa teng'),
    };
    const awsSdkStub = {
      CloudWatchLogs: sinon.stub().returns(cwlStub),
    };
    const { MyClass } = proxyquire('./', {
      'aws-sdk': awsSdkStub,
    });
    const myClass = new MyClass();
    myClass._getLogs({ 'group-name': 'test group name', 'stream-name': 'test stream name' }, 'test filter');
    sinon.assert.calledOnce(awsSdkStub.CloudWatchLogs);
    sinon.assert.calledWithExactly(cwlStub.filterLogEvents, {
      logGroupName: 'test group name',
      filterPattern: 'test filter',
      logStreamNames: ['test stream name'],
    });
  });
});
