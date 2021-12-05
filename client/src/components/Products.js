import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data/productData";
import ProductItems from "./ProductItems";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products({category, filters, sort}) {

  console.log(category, filters, sort);

  return (
    <Container>
      {popularProducts &&
        popularProducts.length > 0 &&
        popularProducts.map((item) => (
          <ProductItems key={item.id} item={item} />
        ))}
    </Container>
  );
}
