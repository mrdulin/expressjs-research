import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
  res.send('pong');
};

export const health = (req: Request, res: Response) => {
  res.send('OK');
};
