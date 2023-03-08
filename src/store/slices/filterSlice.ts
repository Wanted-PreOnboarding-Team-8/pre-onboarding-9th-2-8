import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    minPrice: 0,
    maxPrice: 0,
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice } = filterSlice.actions;

export default filterSlice.reducer;
