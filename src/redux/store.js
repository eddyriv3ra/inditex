import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import productsReducer from './productsSlice';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products'],
};

export const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
