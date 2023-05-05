import { NextFunction, Request, Response } from "express";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('The error handler have been called');

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  return res.status(500).json({ message: 'Intesdarnal server error' })
}

export { AppError, handleErrors };