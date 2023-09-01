import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/products';
import categoriesReducer from './slices/categories';

const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
