import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const selectProductSlice = createSlice({
  name: "selectedProductSlice",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      return action.payload.product;
    },
  },
});

export const { selectProduct } = selectProductSlice.actions;

export default selectProductSlice.reducer;
