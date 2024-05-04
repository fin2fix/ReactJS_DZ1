import { createSlice } from "@reduxjs/toolkit";

export const ProductListSlice = createSlice({
  name: "productList",
  initialState: {
    array: [
      {
        id: 1,
        name: "Product 1",
        description: "This is the Product 1",
        price: 1000,
        available: true,
      },
      {
        id: 2,
        name: "Product 2",
        description: "This is the Product 2",
        price: 2000,
        available: false,
      },
      {
        id: 3,
        name: "Product 3",
        description: "This is the Product 3",
        price: 3000,
        available: true,
      },
    ],
  },
  reducers: {
    addProduct: (state, { payload: newProductItem }) => {
      if (state.array.some((item) => item.id === newProductItem.id)) {
        return;
      }
      state.array.push(newProductItem);
    },
    deleteProduct: (state, { payload: productItem }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== productItem.id
      );
      state.array = filteredArray;
    },
  },
});

export const { addProduct, deleteProduct } =  ProductListSlice.actions;

export default ProductListSlice.reducer;
