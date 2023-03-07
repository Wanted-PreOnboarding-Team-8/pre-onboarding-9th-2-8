import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cart';

const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
