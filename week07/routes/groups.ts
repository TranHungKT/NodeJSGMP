import {Router} from 'express';

import {
  getGroupById,
  getGroups,
  editGroupById,
  createNewGroupById,
  deleteGroup,
  addUserToGroups,
} from '../controller/group';

import {logMiddleware, verifyTokenMiddleware} from '../middleware';

const router = Router();

router.get('/groups', logMiddleware, verifyTokenMiddleware, getGroups);

router.get('/groups/:id', logMiddleware, verifyTokenMiddleware, getGroupById);

router.post(
  '/groups',
  logMiddleware,
  verifyTokenMiddleware,
  createNewGroupById,
);

router.put('/groups/:id', logMiddleware, verifyTokenMiddleware, editGroupById);

router.delete('/groups/:id', logMiddleware, verifyTokenMiddleware, deleteGroup);

router.post(
  '/groups/:id',
  logMiddleware,
  verifyTokenMiddleware,
  addUserToGroups,
);

export default router;
