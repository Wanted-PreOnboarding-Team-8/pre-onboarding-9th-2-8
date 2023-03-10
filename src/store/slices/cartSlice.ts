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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
