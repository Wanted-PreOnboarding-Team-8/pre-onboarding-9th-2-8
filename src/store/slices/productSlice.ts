import productApi from '@/api/product';
import {
  IFilterCategoryProducts,
  IFilterPriceProducts,
  IProduct,
  IProductReducer,
} from '@/interface/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<IProduct[]>(
  'product/getProducts',
  productApi.getProducts,
);

export const filterPriceProducts = createAsyncThunk(
  'product/filterPriceProducts',
  async ({ minPrice, maxPrice }: IFilterPriceProducts) => {
    const response = await productApi.getProducts();
    const filterPrice = response.filter(
      (product: IProduct) =>
        product.price > minPrice && product.price < maxPrice,
    );
    return filterPrice;
  },
);

export const filterCategoryProducts = createAsyncThunk(
  'product/filterCategoryProducts',
  async ({ spaceCategory }: IFilterCategoryProducts) => {
    const response = await productApi.getProducts();
    const filterCategory = response.filter((product: IProduct) =>
      spaceCategory.find((space) => space === product.spaceCategory),
    );
    return filterCategory;
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

    builder.addCase(filterPriceProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(filterPriceProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(filterPriceProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = '상품 목록을 가져올 수 없습니다.';
    });

    builder.addCase(filterCategoryProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(filterCategoryProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(filterCategoryProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = '상품 목록을 가져올 수 없습니다.';
    });
  },
});

export default productSlice.reducer;
