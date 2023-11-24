import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUserByUserId);
router.put('/:userId', UserControllers.updateUserByUserId);
export const UserRoutes = router;
