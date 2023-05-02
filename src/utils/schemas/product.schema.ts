import * as z from 'zod';

export const stockOptions = ['Available', 'Out of Stock', 'Expired'] as const;

export const createProductSchema = z.object({
  name: z.string().min(3, {
    message: 'This name is too short. 🥹',
  }),
  category: z.string().min(3, {
    message: 'This category is too short. 🥺',
  }),
  description: z.string().min(10, {
    message: 'This description is too short. 😢',
  }),
  quantity: z.number().min(1, {
    message: 'This quantity is too short.',
  }),
  stock: z.enum([...stockOptions]),
  price: z
    .number({
      invalid_type_error: 'The price must be a number. 🤡',
      required_error: 'The price is required. 🤡',
    })
    .min(0.01, {
      message: 'The price cannot be possibly less than 0.01. 😳',
    }),
  images: z.string(),
  expiredAt: z.date().min(new Date(), {
    message: 'The expiration date cannot be in the past, Sherlock. 🤔',
  }),
});

const productSchema = z.object({
  ...createProductSchema.shape,
  sellerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  id: z.string(),
});

export const updateProductSchema = createProductSchema.partial();

export type TCreateProductFieldValues = z.infer<typeof createProductSchema>;
export type TProduct = z.infer<typeof productSchema>;
export type TUpdateProductFieldValues = z.infer<typeof updateProductSchema>;
