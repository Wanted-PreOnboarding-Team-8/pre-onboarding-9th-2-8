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
    increaseQuantity: (state, action) => {
      const { idx, maxQuantity } = action.payload;
      const productIndex = state.carts.findIndex((item) => item.idx === idx);
      if (productIndex >= 0) {
        const updatedProduct = { ...state.carts[productIndex] };
        if (updatedProduct.quantity < maxQuantity) {
          updatedProduct.quantity++;
          state.carts[productIndex] = updatedProduct;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const { idx } = action.payload;
      const productIndex = state.carts.findIndex((item) => item.idx === idx);
      if (productIndex >= 0) {
        const updatedProduct = { ...state.carts[productIndex] };
        if (updatedProduct.quantity > 1) {
          updatedProduct.quantity--;
          state.carts[productIndex] = updatedProduct;
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
