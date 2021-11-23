import {Request, Response, NextFunction} from 'express';
import {generateAccessToken} from '../helpers';

import {getUserByLogin} from '../services/UserServices';

export const login = async (
  req: Request<{}, {}, {login: string; password: string}>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user: any = await getUserByLogin(req.body.login);
    if (!user || (user !== null && req.body.password !== user.password)) {
      return next(new Error('Invalid user'));
    }
    return res.status(200).json({
      token: generateAccessToken(req.body.login),
    });
  } catch (error) {
    return next(new Error('Something went wrong'));
  }
};
