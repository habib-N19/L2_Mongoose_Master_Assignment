import { z } from 'zod';

const fullNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be more than 3 character' })
    .max(20, { message: 'First name must be less than 20 character' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be more than 2 character' })
    .max(20, { message: 'Last name must be less than 20 character' }),
});
const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const orderValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});
const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: fullNameValidationSchema,
  age: z.number().positive({ message: 'Age must be positive' }),
  email: z.string().email({ message: 'Invalid email' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
  orders: z.array(orderValidationSchema).optional().default([]),
});
export default userValidationSchema;
