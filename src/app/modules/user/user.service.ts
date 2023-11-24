import { TUser } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: TUser) => {
  if (await User.isUserExists(user.userId.toString())) {
    throw new Error('User already exists ');
  }
  const result = await User.create(user);
  return result;
};
const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserByUserIdFromDB = async (userId: string) => {
  const result = await User.findOne({ userId });

  return result;
};
export const UserServices = {
  createUserInDB,
  getAllUsersFromDB,
  getSingleUserByUserIdFromDB,
};
