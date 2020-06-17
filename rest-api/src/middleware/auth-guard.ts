import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import HttpError from '../models/http-error';

// TODO change param req: Request
const authGuard = (req: any, _res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    throw new HttpError(401, 'not authenticated');
  }
  const token = authHeader.split(' ')[1];
  // TODO change param : string | object
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(token, 'secret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    throw new HttpError(401, 'not authenticated');
  }
  req.userId = decodedToken.userId;
  next();
}

export default authGuard;

// module.exports = (req, res, next) => {
//   const authHeader = req.get('Authorization');
//   if (!authHeader) {
//     const error = new Error('not authenticated');
//     error.statusCode = 401;
//     throw error;
//   }
//   const token = authHeader.split(' ')[1];
//   let decodedToken;
//   try {
//     decodedToken = jwt.verify(token, 'secret');
//   } catch (err) {
//     err.statusCode = 500;
//     throw err;
//   }
//   if (!decodedToken) {
//     const error = new Error('not authenticated');
//     error.statusCode = 401;
//     throw error;
//   }
//   req.userId = decodedToken.userId;
//   next();
// }
