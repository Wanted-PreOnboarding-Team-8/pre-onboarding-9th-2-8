import { CartType } from '@/interface/cart';
import { IProduct } from '@/interface/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isProductExists = state.some(
        (product) => product.idx === action.payload.idx,
      );
      if (isProductExists) {
        const mappedCart = state.map((product) => {
          if (product.idx === action.payload.idx) {
            return { ...product, count: product.count + 1 };
          } else {
            return product;
          }
        });
        return mappedCart;
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      const filtered = state.filter(
        (product) => product.idx !== action.payload,
      );
      return filtered;
    },
  },
});

export const { addToCart, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
