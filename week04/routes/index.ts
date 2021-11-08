import {Router} from 'express';

import userRouter from './users';
import groupRouter from './groups';

const router = Router();

router.use(userRouter);
router.use(groupRouter);

export default router;
