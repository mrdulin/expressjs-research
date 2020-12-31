import { IUserService } from './userService';

export function factory(userService: IUserService) {
  return async function userController() {
    return userService.getUserById('1');
  };
}
