import jwt from 'jsonwebtoken';
import {InvalidTokenError} from '.';

export const generateAccessToken = (login: string) =>
  jwt.sign({login}, 'ACCESS_TOKEN', {
    expiresIn: '10m',
  });

export const decodeToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, 'ACCESS_TOKEN');
    return decoded;
  } catch (err) {
    throw new InvalidTokenError();
  }
};
