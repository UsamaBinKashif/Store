import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../features/cartSlice";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    getProduct();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <img src={product.image} alt="product-image" loading="lazy" />
        <h4>{product.title}</h4>
        <h4
          style={{
            color: "#696969",
            wordBreak: "break-word",
          }}
        >
          {product.description}
        </h4>
        <h5>Price: {product.price}</h5>
        <button className="btn" onClick={() => handleAdd(product)}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Product;
