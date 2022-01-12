import { getSecret } from './util/secrect-util';
import { Request, Response } from 'express';

export function getId(req: Request, res: Response) {
  const path = 'test/path';
  const uniueID = getSecret(path);
  console.log(uniueID);
  const url = `https://mytest.com?userid=${uniueID}`;
  res.redirect(302, url);
}
