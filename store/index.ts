import { combineReducers, configureStore } from '@reduxjs/toolkit';
import footerReducer from './slices/footer';
import productsReducer from './slices/products';
import categoriesReducer from './slices/categories';

const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer,
  footerReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
