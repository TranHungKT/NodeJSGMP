import {Request, Response, NextFunction} from 'express';

import {UserSchema, UserDeleteSchema, UserInterface} from '../models/Users';

import {
  findAllUser,
  findAllUserByLogin,
  updateUserByLogin,
  createNewUser,
  deleteUserById,
  getLimitUser,
  findAllUserById,
} from '../services/UserServices';

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const usersData = await findAllUser();
    res.send({usersData});
  } catch (error: any) {
    return next(error.message);
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params;

    const user = await findAllUserById(id);
    if (!user) {
      return next('Can not find user');
    }

    return res.json({data: user});
  } catch (error: any) {
    return next(error.message);
  }
};

export const createNewUserController = async (
  req: Request<{}, {}, UserInterface>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await UserSchema.validateAsync(req.body);

    const user = await findAllUserByLogin(req.body.login);

    if (user.length !== 0) {
      return next('Invalid login');
    }

    await createNewUser(req.body);

    return res.send('Success');
  } catch (error: any) {
    return next(error.message);
  }
};

export const editUserController = async (
  req: Request<{id: string}, {}, Omit<UserInterface, 'id'>>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await UserSchema.validateAsync(req.body);
    const id = req.params.id;
    const user = await updateUserByLogin({...req.body, id});

    if (user[0] === 0) {
      return next('Invalid login');
    }

    return res.send('Success');
  } catch (error: any) {
    return next(error.message);
  }
};

export const deleteUserController = async (
  req: Request<{id: string}, {}, {}>,
  res: Response,
  next: NextFunction,
) => {
  const user = await deleteUserById(req.params.id);

  if (!user) {
    return next('Invalid id');
  }

  return res.send('Success');
};

export const getLimitedUserController = async (
  req: Request<{}, {}, {}, {loginSubstring: string; limit: string}>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {loginSubstring, limit} = req.query;

    const userList = await getLimitUser(loginSubstring, limit);
    res.send(userList);
  } catch (error: any) {
    return next(error.message);
  }
};
