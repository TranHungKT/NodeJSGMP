import {Router} from 'express';

import {
  getUserById,
  getLimitedUser,
  getUsers,
  editUser,
  createNewUser,
  deleteUser,
} from '../controller/user';

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createNewUser);

router.put('/users/:id', editUser);

router.delete('/users', deleteUser);

router.get('/users', getLimitedUser);

export default router;
