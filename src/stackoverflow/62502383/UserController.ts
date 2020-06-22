import { Request, Response } from 'express';
import { UserModel } from './UserModel';

type I500Response = any;
type I200Response = any;

export class UserController {
  public static get = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await UserModel.findById(1);

      if (user) {
        res.status(200).json(<I200Response>{ msg: 'user data', data: user });
      }
    } catch (e) {
      res.status(500).json(<I500Response>{ error: e.message });
    }
  };
}
