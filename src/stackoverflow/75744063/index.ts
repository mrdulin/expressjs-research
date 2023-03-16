import express, { NextFunction } from 'express';

declare module 'express' {
  export interface Response {
    Success(message: string, data?: any, responseCode?: number): void;
    Error(message: string, data?: any, responseCode?: number): void;
  }
}

const responseMiddleware = (req: express.Request, res: express.Response, next: NextFunction) => {
  res.Success = (message: string, data?: any, resCode?: number) => {
    resCode = resCode ? resCode : 200;
    res.status(resCode).json({
      success: true,
      message,
      data,
    });
  };

  res.Error = (message: string, data?: any, resCode?: number) => {
    resCode = resCode ? resCode : 200;
    res.status(resCode).json({
      success: true,
      message,
      data,
    });
  };

  next();
};
