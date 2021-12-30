import firebase from 'firebase-functions-test';
import { Request, Response } from 'firebase-functions';
import sinon from 'sinon';
import { onCalculate } from './onCalculate';

const test = firebase();

describe('Calculate', () => {
  after(() => {
    test.cleanup();
  });

  it('should return 3', () => {
    const req = {
      query: {},
      body: {
        param1: 1,
        param2: 2,
      },
    };

    const res = { status: sinon.stub().returnsThis(), send: sinon.stub() };

    onCalculate(req as Request, (res as unknown) as Response);

    sinon.assert.calledWithExactly(res.status, 200);
    sinon.assert.calledWithExactly(res.send, 3);
  });
});
