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
      console.log("This from first useEffect");
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
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  return (
    <Container>
      {loading && <h3>Loading...</h3>}
      {error && !loading && <h3>Can not find your desired products!</h3>}
      {category
        ? filteredProducts &&
          filteredProducts.length > 0 &&
          filteredProducts.map((item) => (
            <ProductItems key={item._id} item={item} />
          ))
        : products &&
          products.length > 0 &&
          products
            .slice(0, 7)
            .map((item) => <ProductItems key={item._id} item={item} />)}
    </Container>
  );
}
