import * as z from 'zod';
import { passwordSchema } from './password.schema';

export const updatePasswordSchema = z.object({
  currentPassword: passwordSchema,
  newPassword: passwordSchema,
  newPasswordConfirmation: passwordSchema,
});

export type TUpdatePasswordFieldValues = z.infer<typeof updatePasswordSchema>;
