import {User, UserInterface} from '../models/Users';

import {Op} from 'sequelize';
import {GroupUserModel} from '../models/GroupUser';

export const findAllUser = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    throw new Error();
  }
};

export const findAllUserByLogin = async (login: string) => {
  try {
    const user = await User.findAll({
      where: {
        login: login,
      },
    });
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const findAllUserById = async (id: string) => {
  try {
    const user = await User.findAll({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const createNewUserData = async (userData: UserInterface) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const updateUserByLogin = async (userData: UserInterface) => {
  try {
    const user = await User.update(
      {...userData},
      {
        where: {
          login: userData.login,
        },
      },
    );
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const deleteUserById = async (id: string) => {
  try {
    const user = await User.update(
      {isDeleted: 1},
      {
        where: {
          id: id,
        },
      },
    );
    const userGroupRelations = await GroupUserModel.findAll({
      where: {
        UserId: id,
      },
    });
    userGroupRelations.forEach((userGroupRelation: any) => {
      userGroupRelation?.destroy();
    });
    return;
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const getLimitUser = async (loginSubstring: string, limit: string) => {
  try {
    const users = await User.findAll({
      where: {
        login: {
          [Op.like]: `%${loginSubstring}%`,
        },
      },
      limit: parseInt(limit),
    });
    return users;
  } catch (error) {
    throw new Error();
  }
};
