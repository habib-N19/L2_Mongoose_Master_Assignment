import { TOrder, TUser } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: TUser) => {
  if (await User.isUserExists(user.userId)) {
    throw new Error('User already exists ');
  }
  const result = await User.create(user);
  return result;
};
const getAllUsersFromDB = async () => {
  const result = await User.find().select(
    'username fullName age email address',
  );
  return result;
};
const getSingleUserByUserIdFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not found');
  }
  const result = await User.findOne({ userId });
  return result;
};
const updateUserInfoByUserIdFromDB = async (userId: number, user: TUser) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User does not exist');
  }
  const result = await User.updateOne({ userId }, user);
  return result;
};
const deleteUserByUserIdFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User does not exist');
  }
  const result = await User.deleteOne({ userId });
  return result;
};

// add new product to orders array
const addProductOrderToDB = async (userId: number, orders: TOrder) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User does not exist');
  }
  const result = await User.updateOne(
    { userId },
    { $push: { orders: orders } },
  );
  return result;
};
// get all order for a specific user by user id
const getAllOrdersByUserIdFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User does not exist');
  }
  const result = await User.find({ userId }).select('orders');
  return result;
};
export const UserServices = {
  createUserInDB,
  getAllUsersFromDB,
  getSingleUserByUserIdFromDB,
  updateUserInfoByUserIdFromDB,
  deleteUserByUserIdFromDB,
  addProductOrderToDB,
    getAllOrdersByUserIdFromDB,
};
