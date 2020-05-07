import { TestController } from './controller';
import sinon from 'sinon';

describe('61645232', () => {
  it('should pass', async () => {
    const req = { params: { testid: 12345 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
    await TestController.getTest(req, res, next);
    sinon.assert.calledWithExactly(res.status, 200);
    sinon.assert.calledWithExactly(res.json, []);
  });
});
