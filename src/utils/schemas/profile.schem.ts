import * as z from 'zod';

export const profileSchema = z.object({
  given_name: z.string(),
  avatar: z.string(),
  surname: z.string(),
  street: z.string(),
  province: z.string(),
  district: z.string(),
  cell: z.string(),
  sector: z.string(),
});

export type TProfileFieldValues = z.infer<typeof profileSchema>;
