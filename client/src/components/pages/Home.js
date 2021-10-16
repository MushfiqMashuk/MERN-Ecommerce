import React from "react";
import Categories from "../Categories";
import Layout from "../Layout";
import Products from "../Products";
import Slider from "../Slider";

export default function Home() {
  return (
    <div>
      <Layout>
        <Slider />
        <Categories />
        <Products />
      </Layout>
    </div>
  );
}
