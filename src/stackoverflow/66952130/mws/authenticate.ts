import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies;
  console.log('cookies: ', req.cookies);
  if (token) {
    jwt.verify(token, process.env.JWT_TOKEN_KEY, (error, verifyResponse) => {
      if (error) return res.sendStatus(403);
      req.cookies = { _id: verifyResponse._id, locale: verifyResponse.locale };
      return next();
    });
  }
  return res.sendStatus(401);
};

export default authenticate;
