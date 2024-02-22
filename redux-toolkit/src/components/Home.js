import React from "react";
import { useGetProductsApiByNameQuery } from "../features/productsApi";
const Home = () => {
  const { data, error, isLoading } = useGetProductsApiByNameQuery();

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred</p>
      ) : (
        <>
          <h2>New Items</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title.substring(0, 10)}</h3>
                <img src={product.image} alt="product" />
                <div className="details">
                  <span className="des">
                    {product.description.substring(0, 18)}
                  </span>
                  <span className="price">
                    <span>Price: </span>${product.price}
                  </span>
                </div>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
