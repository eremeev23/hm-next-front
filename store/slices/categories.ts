import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { Category } from "@/types/data";

interface IState {
  categories: Category[];
  mainCategories: Category[];
}

const initialState: IState = {
  categories: [],
  mainCategories: []
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const { data } = await axios.get(`http://localhost:8080/api/categories`);
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log(action.payload)
      // state.categories = action.payload;
      // state.mainCategories = action.payload.filter((category: Category) => {
      //   return category.CatName.toLowerCase() === 'women'
      //     || category.CatName.toLowerCase() === 'men'
      //     || category.CatName.toLowerCase() === 'kids';
      // })
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log(action.payload)
    })
  }
})

export default categoriesSlice.reducer
