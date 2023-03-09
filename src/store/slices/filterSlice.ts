import { createSlice } from '@reduxjs/toolkit';

const MAX_PRICE = 100_000;

const initialState = {
  byPrice: {
    minPrice: 0,
    maxPrice: MAX_PRICE,
  },
  byLocationRange: [],
  byLocation: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.byPrice.minPrice = action.payload[0];
      state.byPrice.maxPrice = action.payload[1];
    },
    setLocationList: (state, action) => {
      state.byLocationRange = action.payload;
    },
    setLocationRange: (state, action) => {
      action.payload.length === 0
        ? (state.byLocation = 'all')
        : (state.byLocation = action.payload);
    },
  },
});

export const { setPriceRange, setLocationList, setLocationRange } =
  filterSlice.actions;

export default filterSlice.reducer;
