import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedCart: [],
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    onOpen: (state, action) => {
      state.isOpen = true;
      state.selectedCart = action.payload;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = dialogSlice.actions;

export default dialogSlice.reducer;
