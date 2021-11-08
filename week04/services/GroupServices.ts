import {Group, GroupInterface, GroupSchema} from '../models/Groups';

import {Op} from 'sequelize';

export const findAllGroup = async () => {
  try {
    const groups = await Group.findAll();

    return groups;
  } catch (error) {
    throw new Error();
  }
};

export const findAllGroupById = async (id: string) => {
  try {
    const group = await Group.findAll({
      where: {
        id: id,
      },
    });
    return group;
  } catch (error) {
    throw new Error();
  }
};

export const createNewGroup = async (groupData: GroupInterface) => {
  try {
    const group = await Group.create(groupData);
    return group;
  } catch (error) {
    throw new Error();
  }
};

export const updateGroupById = async (groupData: GroupInterface) => {
  try {
    const group = await Group.update(
      {...groupData},
      {
        where: {
          id: groupData.id,
        },
      },
    );
    return group;
  } catch (error) {
    throw new Error();
  }
};

export const deleteGroupById = async (id: string) => {
  try {
    const group = await Group.findOne({
      where: {
        id,
      },
    });
    group?.destroy();
  } catch (error) {
    throw new Error();
  }
};
