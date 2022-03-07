import { getToken } from './tokenUtil';
import { Request, Response } from 'express';

export async function userInfo(req: Request, res: Response) {
  const { name, value } = req.body;
  try {
    let token = await getToken(name, value);
    res.send({ status: 'success', message: 'token creation success' });
  } catch (error) {
    res.send({ status: 'Failue', message: error });
  }
}
