import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAddToCartFieldValues } from '../utils/schemas';

type CartState = {
  cart: TAddToCartFieldValues[];
};

const initialState: CartState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TAddToCartFieldValues>) => ({
      ...state,
      cart: [...state.cart, action.payload],
    }),
    clearCart: (state) => ({
      ...state,
      cart: initialState.cart,
    }),
  },
});

export const { addToCart } = cartSlice.actions;
export { cartSlice };
