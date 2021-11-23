import {Router} from 'express';

import userRouter from './users';
import groupRouter from './groups';
import authRouter from './auths';

const router = Router();

router.use(userRouter);
router.use(groupRouter);
router.use(authRouter);

export default router;
