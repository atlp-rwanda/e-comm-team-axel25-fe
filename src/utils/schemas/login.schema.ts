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
  password: z.string().nonempty()
    .min(6, {

      message: 'enter valid password',
    })
  ,
});

export type TLoginFieldValues = z.infer<typeof loginSchema>;
