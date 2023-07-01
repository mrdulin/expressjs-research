import express, { NextFunction, Request, Response } from 'express';

const app = express();

const authenticate = (req: Request, res: Response, next: NextFunction) => {
	next();
};

app.post('/create', authenticate, (req: Request, res: Response) => {});
