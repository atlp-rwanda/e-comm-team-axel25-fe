import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email cannot be empty',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});

export type TLoginFieldValues = z.infer<typeof loginSchema>;
