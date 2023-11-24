/* eslint-disable no-console */
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const zodParsedData = userValidationSchema.parse(user);
    const result = await UserServices.createUserInDB(zodParsedData);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
      error: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'All users fetched successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || 'Internal server error',
      error: {
        code: 404,
        description: 'Users not found!',
      },
    });
  }
};
const getSingleUserByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await UserServices.getSingleUserByUserIdFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || 'Internal server error',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const updateUserByUserId = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const userId = user.userId;
    const zodParsedUpdatedData = userValidationSchema.parse(user);
    const result = await UserServices.updateUserInfoByUserIdFromDB(
      userId,
      zodParsedUpdatedData,
    );
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
      error: {
        code: 500,
        description: 'User not updated!',
      },
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteUserByUserIdFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
      error: {
        code: 500,
        description: 'User not deleted!',
      },
    });
  }
};
export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUserByUserId,
  updateUserByUserId,
  deleteUserById,
};
