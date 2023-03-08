import productApi from '@/api/product';
import { IProduct, IProductReducer } from '@/interface/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IFilterState {
  minPrice: number;
  maxPrice: number;
}

export const getProducts = createAsyncThunk<IProduct[]>(
  'product/getProducts',
  productApi.getProducts,
);

export const getFilteredProducts = createAsyncThunk(
  'product/getFilteredProducts',
  async ({ minPrice, maxPrice }: IFilterState) => {
    const response = await productApi.getProducts();
    const filteredProducts = response.filter(
      (product: IProduct) =>
        Number(product.price) >= minPrice && Number(product.price) <= maxPrice,
    );
    return filteredProducts;
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
    builder.addCase(getFilteredProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFilteredProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getFilteredProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = '찾은 목록을 가져올 수 없습니다.';
    });
  },
});

export default productSlice.reducer;
