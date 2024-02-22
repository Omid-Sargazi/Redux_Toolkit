import React from "react";
import { useGetProductsApiByNameQuery } from "../features/productsApi";
const Home = () => {
  const { data, error, isLoading } = useGetProductsApiByNameQuery();

  return <div>{console.log(data, "homePage")}</div>;
};

export default Home;
