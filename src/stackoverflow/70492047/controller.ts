import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export function test(req: Request, res: Response) {
  const state = uuid();
  if (true) {
    const url = `https://testurl/user?state=${state}`;
    res.redirect(302, url);
  }
}
