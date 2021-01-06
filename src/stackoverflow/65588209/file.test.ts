import sinon from 'sinon';
import { file } from './file';

describe('Testing API | EslSocketPoolHandler methods', function () {
  let socketMock;
  beforeEach(function () {
    socketMock = {
      setTimeout: sinon.stub(),
      destroy: sinon.spy(),
      end: sinon.spy(),
    };
  });

  describe('Testing endSocketConn() function', function () {
    it('It should execute socket.destroy if timeout occurred after sending commandToSend', function () {
      socketMock.setTimeout.callsFake((ms, cb) => {
        cb();
      });
      file.endSocketConn(socketMock);

      sinon.assert.callCount(socketMock.setTimeout, 1);
      sinon.assert.callCount(socketMock.end, 1);
      sinon.assert.callCount(socketMock.destroy, 1);
    });
  });
});
