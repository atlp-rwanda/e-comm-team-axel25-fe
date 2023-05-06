import * as z from 'zod';
import { passwordSchema } from './password.schema';

export const registerSchema = z.object({
  email: z
    .string({
      required_error: 'Email cannot be empty',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: passwordSchema,
  given_name: z.string().min(3, {
    message: 'given name must be at least 3 characters',
  }),
  surname: z.string().min(3, {
    message: 'sur name must be at least 3 characters',
  }),
});

export type TRegisterFieldValues = z.infer<typeof registerSchema>;
