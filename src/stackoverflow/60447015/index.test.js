const rewire = require('rewire');
const sinon = require('sinon');
const { expect } = require('chai');
const mod = rewire('./');

describe('60447015', () => {
  it('should pass', async () => {
    const ssmMock = { getParametersByPath: sinon.stub().returnsThis(), promise: sinon.stub().resolves('mock data') };
    const awsMock = {
      SSM: ssmMock,
    };
    mod.__set__('ssm', awsMock.SSM);
    const actual = await mod.__get__('getParamsFromParamterStore')('query');
    expect(actual).to.be.eq('mock data');
    sinon.assert.calledWithExactly(ssmMock.getParametersByPath, 'query');
    sinon.assert.calledOnce(ssmMock.promise);
  });
});
