import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../Reducers/ProductListSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});
