import React, { useState } from "react";
import { useLocation } from "react-router";
import components from "../../styles/ProductListStyles";
import Layout from "../Layout";
import Products from "../Products";

const { FilterContainer, Filter, Title, FilterText, Select, Option } =
  components;

export default function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  return (
    <Layout>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleChange} name="color" defaultValue="Color">
            <Option disabled>Color</Option>
            <Option>Cream</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Navy Blue</Option>
            <Option>Black</Option>
            <Option>Brown</Option>
            <Option>Orange</Option>
            <Option>Ash</Option>
          </Select>
          <Select onChange={handleChange} name="size" defaultValue="Size">
            <Option disabled>Size</Option>
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
          <Select
            defaultValue="Newest"
            onChange={(e) => setSort(e.target.value)}
          >
            <Option value="newest">Newest</Option>
            <Option value="asc">From Lowest Price</Option>
            <Option value="desc">From Highest Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
    </Layout>
  );
}
