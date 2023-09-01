import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { Product } from "@/types/data";

interface IState {
  products: Product[];
  randomProducts: [Product, Product, Product] | [];
  categoriesProducts: {
    women: Product | null;
    men: Product | null;
    kids: Product | null
  },
  homeProducts: Product[];
}

const initialState: IState = {
  products: [],
  randomProducts: [],
  categoriesProducts: {
    women: null,
    men: null,
    kids: null
  },
  homeProducts: []
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  () => {
    return axios
      .get(`http://localhost:8080/api/products`)
      .then(({ data }) => data)
  }
);

export const fetchHomeProducts = createAsyncThunk(
  'products/fetchHomeProducts',
  () => {
    return axios
      .get(`http://localhost:8080/api/products?categoryName=Home All`)
      .then(({ data }) => data)
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // ALL CATEGORIES
    builder.addCase(fetchProducts.pending, (state) => {

    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.results;
      state.randomProducts = action.payload.results.filter((item: Product, i: number) => i < 5);

      state.categoriesProducts.women = action.payload.results.filter((item: Product) =>
        item.categoryName.toLowerCase() === 'ladies')[0] || null;
      state.categoriesProducts.men = action.payload.results.filter((item: Product) =>
        item.categoryName.toLowerCase() === 'men')[0] || null;
      state.categoriesProducts.kids = action.payload.results.filter((item: Product) =>
        item.categoryName.toLowerCase() === 'kids')[0] || null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log(action.payload);
    });
    // HOME CATEGORY
    builder.addCase(fetchHomeProducts.pending, (state) => {

    })
    builder.addCase(fetchHomeProducts.fulfilled, (state, action) => {
      state.homeProducts = action.payload.results;
    })
    builder.addCase(fetchHomeProducts.rejected, (state, action) => {
      console.log(action.payload);
    });
  }
})

export default productsSlice.reducer
