import * as z from 'zod';

export const roleSchema = z.object({
  role: z.string(),
});

export type TRoleSchemaValue = z.infer<typeof roleSchema>;
