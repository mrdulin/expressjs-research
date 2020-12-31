import sinon from 'sinon';
import { factory } from './userController';
import { UserService } from './userService';

// const userService = {
//   getUserById: sinon.stub(),
// };
const userService = sinon.createStubInstance(UserService);
console.log(userService);
const userController = factory(userService);

describe('57716288', () => {
  it('works', () => {
    userController();
    sinon.assert.called(userService.getUserById);
  });
});
