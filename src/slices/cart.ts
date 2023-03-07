import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../pages/product/type';
import { CartProductType } from './type';

const initialState: CartProductType[] = [];

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProduct>) => {
      return [...state, { ...action.payload, count: 1 }];
    },
    modifyCart: (state) => {
      return state;
    },
    deleteCart: (state) => {
      return state;
    },
  },
});

export const { addCart, modifyCart, deleteCart } = cart.actions;

export default cart.reducer;
