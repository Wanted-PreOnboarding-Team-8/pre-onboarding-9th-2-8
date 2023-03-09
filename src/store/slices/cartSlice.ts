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
    updateCount: (state, action: PayloadAction<ICartState>) => {
      const isExist = state.find(
        (item) => item.product.idx === action.payload.product.idx,
      );
      if (isExist) {
        isExist.count = action.payload.count;
      }
    },
  },
});

export const { addToCart, updateCount } = cartSlice.actions;

export default cartSlice.reducer;
