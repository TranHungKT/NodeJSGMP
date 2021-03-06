import {Router} from 'express';

import {
  getGroupById,
  getGroups,
  editGroupById,
  createNewGroupById,
  deleteGroup,
  addUserToGroups,
} from '../controller/group';

const router = Router();

router.get('/groups', getGroups);

router.get('/groups/:id', getGroupById);

router.post('/groups', createNewGroupById);

router.put('/groups/:id', editGroupById);

router.delete('/groups/:id', deleteGroup);

router.post('/groups/:id', addUserToGroups);

export default router;
