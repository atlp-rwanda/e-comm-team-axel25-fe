import * as z from 'zod';

export const notificationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  message: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TNotification = z.infer<typeof notificationSchema>;
