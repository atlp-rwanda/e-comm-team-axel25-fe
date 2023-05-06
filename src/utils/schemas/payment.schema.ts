import * as z from 'zod';

export const paymentSchema = z.object({
  cardNumber: z.string().min(13, {
    message: 'Card Number must contain 13 digits',
  }),

  cardHolderName: z.string().min(5, {
    message: 'Cardholder Name is too short',
  }),

  cvv: z
    .string()
    .min(3, {
      message: 'Cvv digits must be 3 or 4',
    })
    .max(4, {
      message: 'Cvv digits must be 3 or 4',
    }),

  mmYy: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      return new Date(arg);
    }
    return 'Unknown';
  }, z.date()),

  fullName: z.string().min(5, {
    message: 'Full Name is too short',
  }),

  email: z.string().email(),
  province: z.string(),
  district: z.string(),
});

export type TPaymentFieldValues = z.infer<typeof paymentSchema>;
