import * as z from 'zod';

export const passwordResetSchema = z
  .object({
    token: z
      .string({
        required_error: 'token cannot be empty',
        invalid_type_error: 'token must be a string',
      })
      .min(5),
    password: z
      .string({
        required_error: 'password cannot be empty',
        invalid_type_error: 'password must be a string',
      })
      .min(8),
    confirmpassword: z
      .string({
        required_error: 'password cannot be empty',
        invalid_type_error: 'password must be a string',
      })
      .min(8),
  })
  .refine((schema) => schema.confirmpassword === schema.password, {
    message: 'password and confirmation password must mutch',
  });

export type TpasswordResetValue = z.infer<typeof passwordResetSchema>;
