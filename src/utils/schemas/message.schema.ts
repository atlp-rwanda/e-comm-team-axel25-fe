import * as z from 'zod';

export const messageSchema = z.object({

  message: z.string().nonempty()
    .min(3, {
      message: 'message too short',
    }),
});

export type TMessageValue = z.infer<typeof messageSchema>;
