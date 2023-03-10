import { ICartReducer } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

type initType = {
  basket: ICartReducer[];
};
const initialState: initType = {
  basket: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newArr = [...state.basket];
      const found = state.basket.find((e) => e.idx === action.payload.idx);

      if (!found) newArr.push({ ...action.payload, reservationCount: 1 });
      else
        newArr.push({
          ...action.payload,
          reservationCount: found.reservationCount + 1,
        });

      state.basket = newArr;
    },
    removeOneFromCart: (state, action) => {
      console.log('rm one action executed');
    },
    removeAllFromCart: (state, action) => {
      console.log('rm all action executed');
      state.basket = state.basket.filter((each) => each.idx !== action.payload);
    },
  },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
