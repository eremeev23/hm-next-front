import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Category, LinkType} from "~/types";
import axios from "axios";
import { FooterData } from "~/pages/api/footer";
import {fetchCategories} from "~/store/slices/categories";

interface IState {
  footerData: FooterData[]
}

export const fetchFooterData = createAsyncThunk(
  'footer/fetchFooterData',
  () => {
    return axios
      .get(`/api/footer`)
      .then(({ data }) => data)
  }
);

const initialState: IState = {
  footerData: [],
}


const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchFooterData.pending, (state) => {

    });
    builder.addCase(fetchFooterData.fulfilled, (state, action) => {
      state.footerData = action.payload;
    });
    builder.addCase(fetchFooterData.rejected, (state, action) => {
      console.log(action.payload)
    })
  }
})

export default footerSlice.reducer
