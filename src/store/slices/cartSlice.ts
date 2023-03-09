import { IProduct } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

interface ICartState {
  carts: IProduct[];
  isAdded: boolean
}

const initialState: ICartState = {
  carts: [],
  isAdded: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.carts.findIndex(
        (item) => item.idx === action.payload.idx,
      );
      if (existingProductIndex >= 0) {
        state.isAdded = false
      } else {
        state.carts.push(action.payload);
        state.isAdded = true
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
