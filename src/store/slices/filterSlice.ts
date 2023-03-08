import { TPriceFilter, TSpaceFilter } from '@/interface/filter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TOption = TSpaceFilter | TPriceFilter;

interface IFilter {
  options: TOption[];
}

const initialState: IFilter = {
  options: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<TOption>) => {
      const target = state.options.find(
        (item) => item.type === action.payload.type,
      );

      if (target) {
        target.value = action.payload.value;
      } else {
        state.options = [...state.options, action.payload];
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.options = state.options.filter(
        (item) => item.type !== action.payload,
      );
    },
  },
});

export const { addFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
