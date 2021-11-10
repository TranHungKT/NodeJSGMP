import sequelize from '../configs/initDB';
import {Group} from './Groups';
import {User} from './Users';

export type GroupUser = {
  userId: string[];
  groupId: string;
};

export const GroupUserModel = sequelize.define(
  'GroupUser',
  {},
  {tableName: 'users_groups'},
);

Group.belongsToMany(User, {through: 'GroupUser'});
User.belongsToMany(Group, {through: 'GroupUser'});
