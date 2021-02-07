const sinon = require('sinon');
const { expect } = require('chai');
const UserModel = require('./UserModel');
const UserController = require('./UseControllerModule');

describe('searchAll', function () {
  let res;

  beforeEach(() => {
    res = {
      send: function () {},
    };
  });

  it("should return all the id's of  members of the club", async function () {
    const stubvalue = {
      userid: '123',
    };
    const mock = sinon.mock(res);
    mock.expects('send').withExactArgs(stubvalue);

    const stub = sinon.stub(UserModel, 'findAll').callsFake((callback) => {
      callback(null, stubvalue);
    });
    UserController.searchAll({}, res);
    expect(stub.calledOnce).to.be.true;
    mock.verify();
    stub.restore();
  });
});
