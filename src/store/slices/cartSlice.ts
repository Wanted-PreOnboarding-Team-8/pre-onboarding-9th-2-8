import { ICartState } from '@/interface/cart';
import { IProduct } from '@/interface/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICartState[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.find(
        (item) => item.product.idx === action.payload.idx,
      );
      if (isExist) {
        isExist.count += 1;
      } else {
        state.push({ count: 1, product: action.payload });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
