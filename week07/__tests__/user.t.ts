import {
  requestCreateNewUser,
  requestGetUser,
  requestGetUserById,
  requestUpdateUser,
} from '../request';

test('get user', async () => {
  const res = await requestGetUser();
  expect(res.data.usersData).toHaveLength;
});

test('get user by Id', async () => {
  const res = await requestGetUserById('23');

  expect(res.data.data[0].login).toEqual('hung2212312311231231232@gmail.com');
});

test('create new user', async () => {
  const res = await requestCreateNewUser({
    login: 'hung221232312321@gmail.com',
    password: '12345678',
    age: 22,
    isDeleted: 0,
  });

  expect(res.status).toEqual(500);
});

test('update new user', async () => {
  const res = await requestUpdateUser({
    id: '23',
    login: 'hung221232312321@gmail.com',
    password: '12345678',
    age: 22,
    isDeleted: 0,
  });

  expect(res.data).toEqual('Success');
});
