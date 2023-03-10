import { IProduct, ICartReducer } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICartReducer = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeOneFromCart: (state, action) => {
      console.log('rm one action executed');
    },
    removeAllFromCart: (state, action) => {
      console.log('rm all action executed');
      state.products = state.products.filter(
        (each) => each.idx !== action.payload,
      );
    },
  },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
