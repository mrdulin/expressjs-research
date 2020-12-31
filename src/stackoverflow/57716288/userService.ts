export interface IUserService {
  getUserById(id: string): Promise<any>;
  insert(data: any): any;
}

export class UserService implements IUserService {
  async getUserById(id: string): Promise<any> {
    throw new Error('not implementated');
  }
  insert(data: any): any {
    throw new Error('not implementated');
  }
}
