import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './modules/productReducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
