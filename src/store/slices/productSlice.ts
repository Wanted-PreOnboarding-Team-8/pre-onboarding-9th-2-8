import productApi from '@/api/product';
import {
  IFilterProducts,
  IProduct,
  IProductReducer,
} from '@/interface/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<IProduct[]>(
  'product/getProducts',
  productApi.getProducts,
);

export const filterProducts = createAsyncThunk(
  'product/filterProducts',
  async ({ minPrice, maxPrice }: IFilterProducts) => {
    const response = await productApi.getProducts();
    const filterProduct = response.filter(
      (product: IProduct) =>
        product.price > minPrice && product.price < maxPrice,
    );
    return filterProduct;
  },
);

const initialState: IProductReducer = {
  isLoading: true,
  error: null,
  products: [],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = '상품 목록을 가져올 수 없습니다.';
    });
    builder.addCase(filterProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(filterProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(filterProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = '상품 목록을 가져올 수 없습니다.';
    });
  },
});

export default productSlice.reducer;
