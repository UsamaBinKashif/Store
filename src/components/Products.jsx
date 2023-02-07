import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../features/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    // localStorage.setItem(product.title, JSON.stringify(product));
  };
  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product-image" loading="lazy" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleAdd(product)}>
              Add to cart
            </button>
            <Link className="btn-view" to={`/products/${product.id}`}>
              View
            </Link>
          </div>
        ))}
        Product
      </div>
    </>
  );
};

export default Products;
