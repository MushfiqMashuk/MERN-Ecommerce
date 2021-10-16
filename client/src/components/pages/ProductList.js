import React from "react";
import components from "../../styles/ProductListStyle";
import Layout from "../Layout";
import Products from "../Products";

const { FilterContainer, Filter, Title, FilterText, Select, Option } =
  components;

export default function ProductList() {
  return (
    <Layout>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled defaultValue>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Navy Blue</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled defaultValue>
              Size
            </Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option defaultValue>Newest</Option>
            <Option>From Lowest Price</Option>
            <Option>From Highest Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Layout>
  );
}
