import { useDispatch, useSelector } from "react-redux";
import { changeAvailable, deleteProduct } from "../Reducers/ProductListSlice";
import React from "react";

export default function ProductList() {
  const products = useSelector((state) => state.productList.array);
  const dispatch = useDispatch();
  return (
    <>
      {products.map((product) => (
        <div key={product.id} style={{ display: "flex", gap: "20px" }}>
          <p>ID: {product.id}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Available: {product.available}</p>
          <button onClick={() => dispatch(changeAvailable(product))}>
            Change available
          </button>
          <button onClick={() => dispatch(deleteProduct(product))}>
            Delete product
          </button>
        </div>
      ))}
    </>
  );
}