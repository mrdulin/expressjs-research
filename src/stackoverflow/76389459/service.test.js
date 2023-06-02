const sinon = require("sinon");
const proxyquire = require('proxyquire');

describe("insertFloatData", () => {
  let databaseConnection;

  beforeEach(() => {
    databaseConnection = {
      define: sinon.stub(),
      sync: sinon.stub()
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should insert endpointData into the 'people' endpoint", async () => {
    const endpoint = "people";
    const endpointData = [{ record: "data" }];
    const PersonStub = {
      upsert: sinon.stub()
    }
    const floatAPIModelsStub = sinon.stub().returns({ Person: PersonStub })
    const floatService = proxyquire('./service', {
      './model': floatAPIModelsStub
    })

    await floatService.insertFloatData(databaseConnection, endpoint, endpointData);

    sinon.assert.calledOnce(PersonStub.upsert)
    sinon.assert.match(PersonStub.upsert.firstCall.args[0], endpointData[0])
  });
});