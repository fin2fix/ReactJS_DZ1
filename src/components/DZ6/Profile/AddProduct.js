import { useDispatch } from "react-redux";
import { addProduct } from "../Reducers/ProductListSlice";
import { React, useState } from "react";

export default function AddProduct({ products }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");

  function inputHandler(e) {
    setProduct(e.target.value);
  }

  function addNewProduct(e) {
    dispatch(
      addProduct({
        id: +products.length + 1,
        name: `${product.name}`,
        description: `${product.description}`,
        price: `${product.price}`,
        available: `${product.available}`,
      })
    );
    e.target.closest("div").querySelector("input").value = "";
  }

  return (
    <div>
      <label htmlFor="product">Enter new product</label>
      <input
        id="product"
        type="text"
        placeholder="name"
        value={product.name}
        onChange={(e) => inputHandler(e)}
      />
      <input
        id="product"
        type="text"
        placeholder="description"
        value={product.description}
        onChange={(e) => inputHandler(e)}
      />
      <input
        id="product"
        type="number"
        placeholder="price"
        value={product.price}
        onChange={(e) => inputHandler(e)}
      />
      <input
        id="product"
        type="checkbox"
        value={product.available}
        onChange={(e) => inputHandler(e)}
      />
      <button onClick={(e) => addNewProduct(e)}>Add new product</button>
    </div>
  );
}
