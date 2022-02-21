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
export const { searchValue } = productsSlice.actions;

export default productsSlice.reducer;
