import joi from 'joi';
import {Model, DataTypes} from 'sequelize';

import sequelize from '../initDB';

export const UserSchema = joi.object({
  local_ID: joi.string().required(),
  login: joi.string().required(),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{0,}$/)
    .required(),
  age: joi.number().integer().min(4).max(130).required(),
  isDeleted: joi.number().required(),
});

export const UserDeleteSchema = joi.object({
  local_ID: joi.string().required(),
});

export interface UserInterface {
  local_ID: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export class User extends Model {}
User.init(
  {
    local_ID: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isDeleted: DataTypes.INTEGER,
  },
  {sequelize, modelName: 'user'},
);
