import userController from './controller';
import { Request } from 'express';
import userService from './service';
import sinon from 'sinon';
import User from './model';

describe('userController', () => {
  it('should create user', async () => {
    const mReq = { body: { name: 'mockName', email: 'mockEmail', password: 'mockPassword#123' } } as Request;
    const mRes = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;
    const mNext = sinon.stub();
    const stubValue = {
      name: 'StubName',
    };
    const createUserServiceStub = sinon.stub(userService, 'createUserService').resolves(stubValue);
    await userController.createUser(mReq, mRes, mNext);
    sinon.assert.calledWithExactly(
      createUserServiceStub,
      new User({
        name: 'mockName',
        email: 'mockEmail',
        password: 'mockPassword#123',
      }),
    );
    sinon.assert.calledWithExactly(mRes.status, 201);
    sinon.assert.calledWithExactly(mRes.json, { status: 201, data: { name: 'StubName' } });
  });
});
