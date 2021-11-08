import {Router} from 'express';

import {
  getUserByIdController,
  getLimitedUserController,
  getUsersController,
  editUserController,
  createNewUserController,
  deleteUserController,
} from '../controller/user';

const router = Router();

router.get('/users', getUsersController);

router.get('/users/:id', getUserByIdController);

router.post('/users', createNewUserController);

router.put('/users/:id', editUserController);

router.delete('/users', deleteUserController);

router.get('/users', getLimitedUserController);

export default router;
