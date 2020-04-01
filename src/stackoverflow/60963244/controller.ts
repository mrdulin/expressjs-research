import { NextFunction, Response, Request } from 'express';
import userService from './service';
import User from './model';

const userController = {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    try {
      const userCreated = await userService.createUserService(user);
      res.status(201).json({ status: 201, data: userCreated });
    } catch (err) {
      next(err);
    }
  },
};

export default userController;
