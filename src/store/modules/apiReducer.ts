import apiClient from '@/api/apiClient';
import { IProduct } from '@/pages/MainPage/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ProductsApiState {
  productsList: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsApiState = {
  productsList: [],
  isLoading: false,
  error: null,
};

export const getProductsData = createAsyncThunk(
  'product/getProductData',
  async () => {
    const response = await apiClient.get('');
    console.log('dd', response.data);
    return response.data;
  },
);

const productsApiSlice = createSlice({
  name: 'productsApi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getProductsData.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProductsData.rejected, (state, action) => {
      state.productsList = [];
      state.isLoading = false;
      state.error = action.error.message ?? 'Error';
    });
  },
});

export default productsApiSlice.reducer;
