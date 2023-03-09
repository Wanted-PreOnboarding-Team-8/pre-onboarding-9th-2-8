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
      const id: number = action.payload;
      state = state.filter((element) => element.idx !== id);
      return state;
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
