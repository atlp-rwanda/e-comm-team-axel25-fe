import * as z from 'zod';

export const passwordSchema = z
  .string()
  .min(6, {
    message: 'Password must be at least 6 characters',
  })
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
