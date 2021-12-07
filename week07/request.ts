import axios from 'axios';
import {User, UserInterface} from './models/Users';

export const requestGetUser = () => {
  return axios.get('http://localhost:3000/users');
};

export const requestGetUserById = (id: string) => {
  return axios.get(`http://localhost:3000/users/${id}`);
};

export const requestCreateNewUser = (user: Omit<UserInterface, 'id'>) => {
  return axios.post(`http://localhost:3000/users`, user);
};

export const requestUpdateUser = (user: UserInterface) => {
  return axios.put(`http://localhost:3000/users/${user.id}`, {
    login: user.login,
    password: user.password,
    age: user.age,
    isDeleted: user.isDeleted,
  });
};

export const requestGetGroups = () => {
  return axios.get('http://localhost:3000/groups');
};

export const requestGetGroupById = (id: string) => {
  return axios.get(`http://localhost:3000/groups/${id}`);
};
