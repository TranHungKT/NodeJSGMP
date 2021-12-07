import {requestGetGroups, requestGetGroupById} from '../request';

test('get group', async () => {
  const res = await requestGetGroups();
  expect(res.data.usersData).toHaveLength;
});

test('get user by Id', async () => {
  const res = await requestGetGroupById('3');

  expect(res.data.data[0].name).toEqual('Group 1');
});
