import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../Reducers/ProductListSlice";
import AddProduct from "./AddProduct";
import React from "react";

export default function ProductList() {
  const products = useSelector((state) => state.productList.array);
  const dispatch = useDispatch();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <AddProduct products={products} />
      {products.map((product) => (
        <div key={product.id} style={{ display: "flex", gap: "20px" }}>
          <p>id: {product.id}</p>
          <p>name: {product.name}</p>
          <p>description: {product.description}</p>
          <p>price: {product.price}</p>
          <p>available: {product.available}</p>

          <button
            onClick={() => {
              return dispatch(deleteProduct(product));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}
