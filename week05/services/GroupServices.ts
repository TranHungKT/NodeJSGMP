import {Transaction} from 'sequelize/types';
import {Group, GroupInterface} from '../models/Groups';
import {GroupUserModel} from '../models/GroupUser';
export const findAllGroup = async () => {
  try {
    const groups = await Group.findAll();
    console.log('LOLO');
    return groups;
  } catch (error) {
    console.log('CAC', error);
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

export const findAllGroupByName = async (name: string) => {
  try {
    const group = await Group.findAll({
      where: {
        name: name,
      },
    });
    return group;
  } catch (error) {
    throw new Error();
  }
};

export const createNewGroup = async (groupData: Omit<GroupInterface, 'id'>) => {
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

    const userGroupRelations = await GroupUserModel.findAll({
      where: {
        UserId: id,
      },
    });
    userGroupRelations.forEach((userGroupRelation: any) => {
      userGroupRelation?.destroy();
    });
    return;
  } catch (error) {
    throw new Error();
  }
};

export const addUserToGroupByIds = async (
  id: string,
  userIds: string[],
  t: Transaction,
) => {
  try {
    const groupUsers = userIds.map(async (userId: string) => {
      const groupUser = await GroupUserModel.findOne({
        where: {
          groupId: id,
          userId: userId,
        },
      });
      if (!groupUser) {
        await GroupUserModel.create(
          {
            groupId: id,
            userId: userId,
          },
          {transaction: t},
        );
      }
    });

    await Promise.all(groupUsers);
    return;
  } catch (error) {
    throw new Error();
  }
};
