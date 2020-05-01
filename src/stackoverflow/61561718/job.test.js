const sinon = require('sinon');
const proxyquire = require('proxyquire');
const rewire = require('rewire');

describe('61561718', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should receive message', () => {
    const logSpy = sinon.spy(console, 'info');
    const child_process_fork_stub = {
      send: sinon.stub().returnsThis(),
      on: sinon
        .stub()
        .returnsThis()
        .yields('fake message'),
      kill: sinon.stub(),
    };
    const child_process_stub = {
      fork: sinon.stub().returns(child_process_fork_stub),
    };
    const job = proxyquire('./job', {
      child_process: child_process_stub,
    });
    job.sSyncJob();
    sinon.assert.calledWithExactly(child_process_stub.fork, 'src/services/ssync-process.js');
    sinon.assert.calledWithExactly(child_process_fork_stub.send, { hello: 'world' });
    sinon.assert.calledWithExactly(child_process_fork_stub.on, 'message', sinon.match.func);
    sinon.assert.calledWithExactly(child_process_fork_stub.on, 'exit', sinon.match.func);
    sinon.assert.calledWithExactly(logSpy, 'Message from child', 'fake message');
    sinon.assert.calledWithExactly(logSpy, 'Child process sProcessJob finished execution');
    sinon.assert.calledOnce(child_process_fork_stub.kill);
  });

  it('should not fork child process if sProcess exists', () => {
    const job = rewire('./job');
    const child_process_stub = {
      fork: sinon.stub(),
    };
    job.__set__({
      sProcess: {},
      child_process: child_process_stub,
    });
    job.sSyncJob();
    sinon.assert.notCalled(child_process_stub.fork);
  });
});
