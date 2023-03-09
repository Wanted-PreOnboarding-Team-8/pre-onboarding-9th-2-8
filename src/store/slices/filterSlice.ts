import { createSlice } from '@reduxjs/toolkit';

const MAX_PRICE = 30_000;

const initialState = {
  byPrice: {
    minPrice: 0,
    maxPrice: MAX_PRICE,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.byPrice.minPrice = action.payload[0];
      state.byPrice.maxPrice = action.payload[1];
    },
  },
});

export const { setPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
