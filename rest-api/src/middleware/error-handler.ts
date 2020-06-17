import { NextFunction, Request, Response} from 'express';

const errorHandler = (error: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log('logging error: ', error);
  const statusCode = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(statusCode).json({ message: message, data: data});
}

export default errorHandler;
