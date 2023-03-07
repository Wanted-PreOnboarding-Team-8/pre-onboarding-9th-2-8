import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './modules/apiReducer';
import productsReducer from './modules/productReducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    api: apiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;