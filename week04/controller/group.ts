import {Request, Response, NextFunction} from 'express';

import {Group, GroupInterface, GroupSchema} from '../models/Groups';

import {
  findAllGroup,
  findAllGroupById,
  findAllGroupByName,
  createNewGroup,
  updateGroupById,
  deleteGroupById,
} from '../services/GroupServices';

export const getGroups = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const groupsData = await findAllGroup();
    res.send({groupsData});
  } catch (error) {
    return next((error as Error).message);
  }
};

export const getGroupById = async (
  req: Request<{id: string}>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params;

    const group = await findAllGroupById(id);
    if (!group) {
      return next('Can not find group');
    }

    return res.json({data: group});
  } catch (error) {
    return next((error as Error).message);
  }
};

export const createNewGroupById = async (
  req: Request<{}, {}, Omit<GroupInterface, 'id'>>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await GroupSchema.validateAsync(req.body);

    const group = await findAllGroupByName(req.body.name);

    if (group.length !== 0) {
      return next('Invalid id');
    }

    await createNewGroup(req.body);

    return res.send('Success');
  } catch (error) {
    return next((error as Error).message);
  }
};

export const editGroupById = async (
  req: Request<{id: string}, {}, Omit<GroupInterface, 'id'>>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await GroupSchema.validateAsync(req.body);
    const id = req.params.id;
    const group = await updateGroupById({...req.body, id});

    if (group[0] === 0) {
      return next('Invalid id');
    }

    return res.send('Success');
  } catch (error) {
    return next((error as Error).message);
  }
};

export const deleteGroup = async (
  req: Request<{id: string}, {}, {}>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteGroupById(req.params.id);

    return res.send('Success');
  } catch (error) {
    return next((error as Error).message);
  }
};
