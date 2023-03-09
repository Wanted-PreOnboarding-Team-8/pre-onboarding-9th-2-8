import { IProduct } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

interface ICartState {
  carts: IProduct[];
}

const initialState: ICartState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.carts.findIndex(
        (item) => item.idx === action.payload.idx,
      );
      if (existingProductIndex < 0) {
        const productWithQuantity = { ...action.payload, quantity: 1 };
        state.carts.push(productWithQuantity);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
