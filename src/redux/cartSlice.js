import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart } from 'api';

const initialState = {
  cartCount: 0,
};

export const sendCartItemsAsync = createAsyncThunk(
  'cart/sendCartItems',
  async (items) => {
    try {
      const response = await addToCart(items);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendCartItemsAsync.fulfilled, (state, action) => {
      state.cartCount = action.payload.count;
    });
  },
});

export default cartSlice.reducer;
