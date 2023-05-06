import * as z from 'zod';
import { passwordSchema } from './password.schema';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email cannot be empty',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: passwordSchema
  ,
});

export type TLoginFieldValues = z.infer<typeof loginSchema>;
