import {NextFunction, Request, Response} from 'express';
import {UnauthorizedError, decodeToken, InvalidTokenError} from '../helpers';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (token === undefined) {
      throw new UnauthorizedError();
    }

    const login = decodeToken(token);

    next();
  } catch (error) {
    next(error);
  }
};
