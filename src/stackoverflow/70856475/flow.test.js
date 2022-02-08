const Flow = require('./flow');
const sinon = require('sinon');

describe('flow', () => {
  it('should pass', () => {
    const sandbox = sinon.createSandbox();
    const flow = new Flow();
    sandbox.spy(flow, 'getParams');
    sandbox.spy(flow, 'loadData');
    flow.change();
    sinon.assert.calledOnce(flow.getParams);
    sinon.assert.calledOnce(flow.loadData);
  });
});
