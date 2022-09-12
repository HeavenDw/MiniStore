import { EProductsSliceStatus, IProduct, IProductsSlice } from './../../models';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: IProductsSlice = {
  products: [],
  status: EProductsSliceStatus.Loading,
  limit: "5"
};

export const fetchProducts = createAsyncThunk<IProduct[], string>('products/fetchProducts', async (limit) => {
  const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products', {
    params: {
      limit
    }
  });
  return response.data;
});

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    changeLimit: (state, action: PayloadAction<string>) => {
      state.limit = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.status = EProductsSliceStatus.Loading;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = EProductsSliceStatus.Success;
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
      state.status = EProductsSliceStatus.Error;
    })
  },
});

export default productsSlice.reducer;
export const { changeLimit } = productsSlice.actions;
