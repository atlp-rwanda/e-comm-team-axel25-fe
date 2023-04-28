import * as z from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(3),
  price: z
    .number({
      required_error: 'Price cannot be empty',
      invalid_type_error: 'Price must be a number',
    })
    .min(1),
  description: z.string().min(10),
  category: z.string().min(3),
});

export type TCreateProductFieldValues = z.infer<typeof createProductSchema>;
