import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from '@/pages/Main/types';

interface IProductState {
  reservProduct: IProducts[];
}

const initialState: IProductState = {
  reservProduct: [],
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.reservProduct.push(action.payload);
    },
  },
});

export const { addProduct } = reservationsSlice.actions;

export default reservationsSlice.reducer;
