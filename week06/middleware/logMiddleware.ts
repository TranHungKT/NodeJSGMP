import {Request, Response, NextFunction} from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  console.log('method', req.method);
  console.log('body', req.body);
  console.log('params', req.params);
  console.log('query', req.query);

  next();
};
