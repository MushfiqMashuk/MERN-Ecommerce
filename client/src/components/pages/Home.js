import React from "react";
import Nav from "../Nav";
import Announcement from "../Announcement";
import Slider from "../Slider";
import Categories from "../Categories";
import Products from "../Products";
import Newsletter from "../Newsletter";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
}
