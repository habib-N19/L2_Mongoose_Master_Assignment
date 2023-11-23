import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TOrder, TUser } from './user.interface';
import config from '../../config';

const fullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    required: [true, 'First Name required'],
    trim: true,
    minlength: [2, 'First Name must be at least 2 characters'],
    maxlength: [20, 'First Name must be less than 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name required'],
    trim: true,
    minlength: [2, 'Last Name must be at least 2 characters'],
    maxlength: [20, 'Last Name must be less than 20 characters'],
  },
});

const addressSchema = new Schema<TAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const orderSchema = new Schema<TOrder>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true },
  fullName: {
    type: fullNameSchema,
    required: [true, 'Full Name required'],
  },
  age: {
    type: Number,
    required: [true, 'Age required'],
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    trim: true,
    minlength: [5, 'Email must be at least 5 characters'],
    maxlength: [50, 'Email must be less than 50 characters'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'Active required'],
  },
  hobbies: {
    type: [String],
    required: [true, 'Hobbies required'],
  },
  address: {
    type: addressSchema,
    required: [true, 'Address required'],
  },
  orders: {
    type: [orderSchema],
    required: [true, 'Orders required'],
  },
});
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
export const UserModel = model<TUser>('User', userSchema);
