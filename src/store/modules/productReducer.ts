import { IProduct } from '@/pages/MainPage/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProductLists {
  productsList: IProduct[];
}

const initialState: IProductLists = {
  productsList: [],
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      const existingProduct = state.productsList.find(
        (product) => product.idx === action.payload.idx,
      );
      if (existingProduct) {
        alert('이미 장바구니에 담겨있는 상품입니다.');
      } else {
        state.productsList.push(action.payload);
      }
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;