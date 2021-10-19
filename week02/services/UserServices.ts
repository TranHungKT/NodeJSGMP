import {
  User,
  UserSchema,
  UserDeleteSchema,
  UserInterface,
} from '../models/Users';

import {Op} from 'sequelize';

export const findAllUser = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    throw new Error();
  }
};

export const findAllUserByLocalId = async (local_ID: string) => {
  try {
    const user = await User.findAll({
      where: {
        local_ID: local_ID,
      },
    });
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const createNewUser = async (userData: UserInterface) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const updateUserById = async (userData: UserInterface) => {
  try {
    const user = await User.update(
      {...userData},
      {
        where: {
          local_ID: userData.local_ID,
        },
      },
    );
    return user;
  } catch (error) {
    throw new Error();
  }
};

export const deleteUserById = async (local_ID: string) => {
  try {
    const user = await User.update(
      {isDeleted: 1},
      {
        where: {
          local_ID: local_ID,
        },
      },
    );
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
