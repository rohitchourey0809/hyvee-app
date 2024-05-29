// store/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://65d5af42f6967ba8e3bc35a3.mockapi.io/blogs/v1/articles";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page = 1) => {
    const response = await axios.get(`${API_URL}?page=${page}&limit=10`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    page: 1,
    hasMore: true,
  },
  reducers: {
    resetProducts: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...state.items, ...action.payload];
        state.page += 1;
        if (action.payload.length < 10) {
          state.hasMore = false;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetProducts } = productsSlice.actions;
export default productsSlice.reducer;
