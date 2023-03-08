import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productReducer from '@/store/slices/productSlice';
import modalReducer from './slices/modalSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
