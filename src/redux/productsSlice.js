import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProduct, fetchProductDetail } from 'api';

const initialState = {
  data: [],
  searchValue: '',
  productDetail: {},
};

export const fetchProductsAsync = createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const response = await fetchProduct();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProductDetailAsync = createAsyncThunk(
  'product/getProduct',
  async (movieId) => {
    try {
      const response = await fetchProductDetail(movieId);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    searchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, searchValue } =
  productsSlice.actions;

export default productsSlice.reducer;
