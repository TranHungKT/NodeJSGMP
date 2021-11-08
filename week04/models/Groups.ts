import joi from 'joi';
import {Model, DataTypes} from 'sequelize';
import sequelize from '../configs/initDB';

type PERMISSION = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export class Group extends Model {}
Group.init(
  {
    name: DataTypes.STRING,
    permissions: DataTypes.ARRAY(DataTypes.STRING),
  },
  {sequelize, modelName: 'group'},
);

export const GroupSchema = joi.object({
  name: joi.string().required(),
  permissions: joi.array().items(joi.string()).required(),
});

export interface GroupInterface {
  id: string;
  name: string;
  permissions: PERMISSION[];
}
