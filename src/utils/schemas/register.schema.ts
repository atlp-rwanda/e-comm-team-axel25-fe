import * as z from 'zod';

export const registerSchema = z.object({
  email: z
    .string({
      required_error: 'Email cannot be empty',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  given_name: z.string().min(3, {
    message: 'given name must be at least 3 characters',
  }),
  surname: z.string().min(3, {
    message: 'sur name must be at least 3 characters',
  }),
});

export type TRegisterFieldValues = z.infer<typeof registerSchema>;
