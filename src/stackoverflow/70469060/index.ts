import { Request, Response } from 'express';

class User {
  name: string = '';
}

// declare module 'express' {
//   export interface Request {
//     user: User;
//   }
// }

// function controller(req: Request, res: Response) {
//   const newUser = new User();
//   req.user = newUser;
// }
