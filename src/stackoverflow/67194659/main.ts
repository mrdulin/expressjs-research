import { UserService } from './UserService';

const model = { name: 'teresa teng' };

const userService = new UserService(model);
console.log(userService.model.name);
