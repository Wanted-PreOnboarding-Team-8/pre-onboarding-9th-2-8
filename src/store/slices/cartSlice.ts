import { IProduct } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    deleteCart: (state, action) => {
      const selectedCart = action.payload;
      return state.filter((element) => !selectedCart.includes(element.idx));
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
