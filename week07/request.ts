import axios from 'axios';
import {UserInterface} from './models/Users';
import {GroupInterface} from './models/Groups';
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

export const requestDeleteUser = (id: string) => {
  return axios.delete(`http://localhost:3000/users/${id}`);
};

export const requestGetGroups = () => {
  return axios.get('http://localhost:3000/groups');
};

export const requestGetGroupById = (id: string) => {
  return axios.get(`http://localhost:3000/groups/${id}`);
};

export const requestCreateNewGroup = (group: Omit<GroupInterface, 'id'>) => {
  return axios.post(`http://localhost:3000/groups`, group);
};

export const requestUpdateGroup = (group: GroupInterface) => {
  return axios.put(`http://localhost:3000/groups/${group.id}`, {
    name: group.name,
    permissions: group.permissions,
  });
};

export const requestDeleteGroup = (id: string) => {
  return axios.delete(`http://localhost:3000/groups/${id}`);
};
