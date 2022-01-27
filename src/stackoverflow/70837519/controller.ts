import { Request, Response } from 'express';
import { userConf } from './conf';
import { userSec } from './auth';

export function userInfo(req: Request, res: Response) {
  const path = 'test:path';
  const path1 = 'test:path1';
  const userID = userConf(path);
  const userPass = userConf(path1);
  const secId = userSec(userID);
  const secPass = userSec(userPass);
  const url = `https://mapuser.com?userId=${secId}&usersec=${secPass}`;
  res.redirect(302, url);
}
