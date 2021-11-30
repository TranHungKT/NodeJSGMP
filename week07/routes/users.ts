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

router.get('/users', logMiddleware, verifyTokenMiddleware, getUsers);

router.get('/users/:id', logMiddleware, verifyTokenMiddleware, getUserById);

router.post('/users', logMiddleware, verifyTokenMiddleware, createNewUser);

router.put('/users/:id', logMiddleware, verifyTokenMiddleware, editUser);

router.delete('/users', logMiddleware, verifyTokenMiddleware, deleteUser);

router.get('/users', logMiddleware, verifyTokenMiddleware, getLimitedUser);

export default router;
