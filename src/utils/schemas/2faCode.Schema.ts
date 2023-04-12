import * as z from 'zod';

export const twoFASchema = z.object({
  code: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});

export type TtwoFAFieldValue = z.infer<typeof twoFASchema>;
