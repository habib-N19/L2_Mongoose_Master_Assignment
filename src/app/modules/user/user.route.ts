import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUserByUserId);
router.put('/:userId', UserControllers.updateUserByUserId);
router.delete('/:userId', UserControllers.deleteUserById);
export const UserRoutes = router;
