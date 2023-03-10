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

      if (!found) {
        newArr.push({ ...action.payload, reservationCount: 1 });
        state.basket = newArr;
      } else {
        const sumArr = newArr.filter((e) => e.idx !== action.payload.idx);

        sumArr.push({
          ...action.payload,
          reservationCount: found.reservationCount + 1,
        });
        state.basket = sumArr;
      }
    },
    removeOneFromCart: (state, action) => {
      const found: any = state.basket.find((e) => e.idx === action.payload);

      const newArr = state.basket.filter((e) => e.idx !== action.payload);

      if (found.reservationCount >= 2)
        newArr.push({ ...found, reservationCount: found.reservationCount - 1 });

      state.basket = newArr;
    },
    removeAllFromCart: (state, action) => {
      state.basket = state.basket.filter((each) => each.idx !== action.payload);
    },
  },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
