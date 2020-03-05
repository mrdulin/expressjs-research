import { NextFunction, Response, Request } from 'express';

const middleware = (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => res.json({ status: 'blocked' }), 1000);
};

export { middleware };
