import { createSlice } from "@reduxjs/toolkit";

export const ProductListSlice = createSlice({
  name: "productList",
  initialState: {
    array: [
      {
        id: 1,
        name: "Product 1",
        description: "This is the first product",
        price: 1000,
        available: 1,
      },
      {
        id: 2,
        name: "Product 2",
        description: "This is the second product",
        price: 2000,
        available: 0,
      },
      {
        id: 3,
        name: "Product 3",
        description: "This is the third product",
        price: 3000,
        available: 1,
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
    changeAvialablity: (state, { payload: ProductItem }) => {
      state.array.map((item) => (item.available = !ProductItem.available));
    },
  },
});

export const { addProduct, deleteProduct, changeAvialablity } =
  ProductListSlice.actions;

export default ProductListSlice.reducer;
