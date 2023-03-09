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
        const modifiedCart = state.map((product) => {
          if (product.idx === action.payload.idx) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
        return modifiedCart;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },
    modifyCartItem: (
      state,
      action: PayloadAction<{ idx: number; quantity: number }>,
    ) => {
      const modifiedCart = state.map((product) => {
        if (product.idx === action.payload.idx) {
          return { ...product, quantity: action.payload.quantity };
        } else {
          return product;
        }
      });
      return modifiedCart;
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      const filtered = state.filter(
        (product) => product.idx !== action.payload,
      );
      return filtered;
    },
  },
});

export const { addToCart, modifyCartItem, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
