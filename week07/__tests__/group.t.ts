import {
  requestGetGroups,
  requestGetGroupById,
  requestCreateNewGroup,
  requestUpdateGroup,
  requestDeleteGroup,
} from '../request';

test('get group', async () => {
  const res = await requestGetGroups();
  expect(res.data.usersData).toHaveLength;
});

test('get group by Id', async () => {
  const res = await requestGetGroupById('3');

  expect(res.data.data[0].name).toEqual('Group 1');
});

test('create new group', async () => {
  const res = await requestCreateNewGroup({
    name: 'GROUP 10',
    permissions: ['WRITE'],
  });

  expect(res.status).toEqual(500);
});

test('update group', async () => {
  const res = await requestUpdateGroup({
    id: '3',
    name: 'GROUP 10',
    permissions: ['WRITE'],
  });

  expect(res.status).toEqual(500);
});

test('delete group', async () => {
  const res = await requestDeleteGroup('3');

  expect(res.data).toEqual('Success');
});
