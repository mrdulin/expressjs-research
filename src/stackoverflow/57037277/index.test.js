const rewire = require('rewire');
const sinon = require('sinon');
const { assert } = require('chai');

describe('Mac Check Portbounce Test', function () {
  let sandbox;
  let requestBody = { hostname: 't9394labswt0001', port_number: 'gi4/0/1', mac_address: 'a899.69e3.bec0' };

  before(function () {
    sandbox = sinon.createSandbox();
  });

  after(function () {
    sandbox.restore();
  });

  it('Should Return Invalid PORT MODE', async function () {
    this.timeout(15000);

    requestBody.mac_address = 'a899.69e3.bec0';
    const performportTrunkCheckStub = sandbox.stub().resolves('/switchport mode trunk/');

    macCheck = rewire('./index');
    macCheck.__set__('performportTrunkCheck', performportTrunkCheckStub);

    let result1 = await macCheck.performMaccheckPortbounce(requestBody);
    sandbox.assert.calledWithExactly(performportTrunkCheckStub, requestBody);
    assert.equal(result1, 'ERROR_CODE_INVALID_PORTMODE');
  });
});
