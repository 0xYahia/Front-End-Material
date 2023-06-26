import { configureStore } from "@reduxjs/toolkit";
import selectedProductReducer from "./selectedProductSlice";

export const store = configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
  },
});
