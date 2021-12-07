import {Router} from 'express';

import {
  getUserById,
  getLimitedUser,
  getUsers,
  editUser,
  createNewUser,
  deleteUser,
} from '../controller/user';
import {logMiddleware, verifyTokenMiddleware} from '../middleware';
const router = Router();

router.get('/users', logMiddleware, getUsers);

router.get('/users/:id', logMiddleware, getUserById);

router.post('/users', logMiddleware, createNewUser);

router.put('/users/:id', logMiddleware, editUser);

router.delete('/users', logMiddleware, deleteUser);

router.get('/users', logMiddleware, getLimitedUser);

export default router;
