import { z } from 'zod';
import { productSchema } from './product.schema';

const cartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number(),
  userId: z.string(),
  Product: productSchema,
});

const cartSchema = z.object({
  total: z.number(),
  items: z.array(cartItemSchema),
});

export const addToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1, {
    message: 'This quantity is too short.',
  }),
});

export const updateCartSchema = z.object({
  quantity: z.number().min(1, {
    message: 'This quantity is too short.',
  }),
});

export type TCart = z.infer<typeof cartSchema>;
export type TAddToCartFieldValues = z.infer<typeof addToCartSchema>;
export type TUpdateCartFieldValues = z.infer<typeof updateCartSchema>;
