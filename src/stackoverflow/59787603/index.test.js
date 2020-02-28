const main = require('./');
const sinon = require('sinon');
const awsParameterStore = require('aws-param-store');
const { expect } = require('chai');
let sandbox = sinon.createSandbox();

describe('59787603', () => {
  it('should pass', async () => {
    let parms = new Map();
    parms.set('key1', 'value1');
    parms.set('key2', 'value2');
    sandbox.stub(awsParameterStore, 'getParametersByPath').resolves(parms);

    const actual = await main();
    expect(actual).to.be.eql(parms);
  });
});
