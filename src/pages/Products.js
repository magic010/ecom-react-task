import React, { useState, useEffect } from "react";
import axios from "axios";
import { products_url } from "../utils/constants";
import Loading from "./Loading";
import ProductCard from "../components/productCard";
import CartItems from "../data";
import { useGlobalContext } from "../context/cart_context";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(CartItems);
  const [search, setSearch] = useState("");
  const { addToCart } = useGlobalContext();

  const getProductsData = async () => {
    try {
      // const response = await axios(products_url);
      // const data = await response.data;
      // console.log(data);
      setProducts(filteredSearch);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error.response);
    }
  };
  const filteredSearch =
    search.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    getProductsData();
  }, [filteredSearch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="products-header  ">
        <p>{products.length} products was found</p>
        <hr />
        <select>
          <option value="lowest-price">Lowest (Price)</option>
          <option value="highest-price">Highest Price</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </div>

      <section className="Products-container">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} {...product} addToCart={addToCart} />
          );
        })}
      </section>
    </>
  );
};

export default Products;
