import Axios from 'axios';
import sinon from 'sinon';
const sandbox = sinon.createSandbox();

describe('axios.get method', () => {
  let axiosGetStub;
  beforeEach(() => {
    axiosGetStub = sandbox.stub(Axios, 'get');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be called once', () => {
    Axios.get('http://localhost:3000');
    sandbox.assert.calledOnce(axiosGetStub);
  });
  it('should be called once again', () => {
    Axios.get('http://localhost:3000');
    sandbox.assert.calledOnce(axiosGetStub);
  });
});
