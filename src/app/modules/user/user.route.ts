import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUserByUserId);
router.put('/:userId', UserControllers.updateUserByUserId);
router.delete('/:userId', UserControllers.deleteUserById);
router.put('/:userId/orders', UserControllers.addProductOrder);
router.get('/:userId/orders', UserControllers.getALlOrdersByUserId);
export const UserRoutes = router;
