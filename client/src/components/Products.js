import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItems from "./ProductItems";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products({ category, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          category
            ? `http://localhost:5000/product?category=${category}`
            : `http://localhost:5000/product`
        );

        const data = await response.json();

        setLoading(false);

        setProducts(data);
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) => {
          Object.entries(filters).every(([key, value]) => {
            item[key].includes(value);
          });
        })
      );
  }, [category, filters, products]);

  return (
    <Container>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Oops! Can not load products!</h3>}
      {products &&
        products.length > 0 &&
        products.map((item) => (
          <ProductItems key={item._id} item={item} />
        ))}
    </Container>
  );
}
