import productApi from '@/api/product';
import { IProduct, IProductReducer } from '@/interface/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<IProduct[]>(
  'product/getProducts',
  productApi.getProducts,
);
export const filterProducts = createAsyncThunk(
  'product/filterProducts',
  async (param: { priceRange: RangeType; checkedSpaceList: string[] }) => {
    const { priceRange, checkedSpaceList } = param;
    const result = await productApi.getProducts();
    const filtered = result.filter(
      (product) =>
        product.price >= priceRange.min &&
        product.price <= priceRange.max &&
        (checkedSpaceList.length
          ? checkedSpaceList.find((space) => space === product.spaceCategory)
          : true),
    );
    return filtered;
  },
);

const initialState: IProductReducer = {
  isLoading: true,
  error: null,
  products: [],
  filter: { priceRange: { min: -1, max: -1 }, spaceList: [] },
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
      let min = action.payload.length ? action.payload[0].price : -1;
      let max = action.payload.length ? action.payload[0].price : -1;
      const spaceList = new Set<string>();
      action.payload.forEach((product) => {
        spaceList.add(product.spaceCategory);
        if (product.price > max) max = product.price;
        if (product.price < min) min = product.price;
      });
      state.filter = {
        priceRange: { min, max },
        spaceList: Array.from(spaceList),
      };
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
