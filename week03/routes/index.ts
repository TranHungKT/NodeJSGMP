import {Router} from 'express';

import {
  getUserByIdController,
  getLimitedUserController,
  getUsersController,
  editUserController,
  createNewUserController,
  deleteUserController,
} from '../controllers/userControllers';

const router = Router();

router.get('/', getUsersController);

router.get('/users/:id', getUserByIdController);

router.post('/users', createNewUserController);

router.put('/users', editUserController);

router.delete('/users', deleteUserController);

router.get('/users', getLimitedUserController);

export default router;
