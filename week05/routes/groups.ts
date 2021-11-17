import {Router} from 'express';

import {
  getGroupById,
  getGroups,
  editGroupById,
  createNewGroupById,
  deleteGroup,
  addUserToGroups,
} from '../controller/group';

import {logMiddleware} from '../middleware';

const router = Router();

router.get('/groups', logMiddleware, getGroups);

router.get('/groups/:id', logMiddleware, getGroupById);

router.post('/groups', logMiddleware, createNewGroupById);

router.put('/groups/:id', logMiddleware, editGroupById);

router.delete('/groups/:id', logMiddleware, deleteGroup);

router.post('/groups/:id', logMiddleware, addUserToGroups);

export default router;
