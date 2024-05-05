import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
          setProduct(data);
          setIsLoading(false);
        });
  }, []);

  return (
    <div>
      <h2>Product Details Page</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 300 }}
            src={product.thumbnail}
            alt={product.title}
          />
          <div style={{marginLeft:"15px"}}>
            <h3>{product.title}</h3>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
