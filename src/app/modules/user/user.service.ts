import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserInDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserByUserIdFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });

  return result;
};
export const UserServices = {
  createUserInDB,
  getAllUsersFromDB,
  getSingleUserByUserIdFromDB,
};
