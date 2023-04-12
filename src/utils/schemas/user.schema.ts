import * as z from 'zod';

export const statusOptions = [
  'Active',
  'Disabled',
  'Need_password_reset',
] as const;

export const roleOptions = ['Admin', 'Seller', 'Buyer'] as const;

export const userSchema = z.object({
  id: z.string(),
  twoFAenabled: z.boolean(),
  twoFAverified: z.boolean(),
  secret: z.string(),
  surname: z.string(),
  given_name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.enum([...roleOptions]),
  status: z.enum([...statusOptions]),
  confirmationCode: z.string(),
  googleId: z.string(),
  resetToken: z.string(),
  province: z.string(),
  district: z.string(),
  sector: z.string(),
  cell: z.string(),
  street: z.string(),
  avatar: z.string(),
  lastPasswordUpdate: z.date(),
});

export type TUser = z.infer<typeof userSchema>;
