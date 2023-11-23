import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  try {
    const result = await UserServices.createUserInDB(user);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createUser,
};
