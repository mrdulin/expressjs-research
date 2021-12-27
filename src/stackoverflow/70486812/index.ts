import { NextFunction, Request, Response } from 'express';

interface IUser {
  name: string;
}

// declare module 'express' {
//   interface Request {
//     user: IUser;
//   }
// }

const controller = async (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.user.name);
};
