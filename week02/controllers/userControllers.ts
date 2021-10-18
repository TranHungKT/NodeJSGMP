import {Request, Response, NextFunction} from 'express';

import {
  User,
  UserSchema,
  UserDeleteSchema,
  UserInterface,
} from '../models/Users';

import {Op} from 'sequelize';

import {
  findAllUser,
  findAllUserByLocalId,
  updateUserById,
  createNewUser,
  deleteUserById,
  getLimitUser,
} from '../services/queryServices';

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

    const user = await findAllUserByLocalId(id);
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

    const user = await findAllUserByLocalId(req.body.local_ID);

    if (user.length !== 0) {
      return next('Invalid id');
    }

    await createNewUser(req.body);

    return res.send('Success');
  } catch (error: any) {
    return next(error.message);
  }
};

export const editUserController = async (
  req: Request<{}, {}, UserInterface>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await UserSchema.validateAsync(req.body);

    const user = await updateUserById(req.body);

    if (!user) {
      return next('Invalid id');
    }

    return res.send('Success');
  } catch (error: any) {
    return next(error.message);
  }
};

export const deleteUserController = async (
  req: Request<{}, {}, {local_ID: string}>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await UserDeleteSchema.validateAsync(req.body);
  } catch (error: any) {
    return next(error.message);
  }

  const user = await deleteUserById(req.body.local_ID);

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
