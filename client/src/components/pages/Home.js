import React from "react";
import Announcement from "../Announcement";
import Categories from "../Categories";
import Footer from "../Footer";
import Nav from "../Nav";
import Newsletter from "../Newsletter";
import Products from "../Products";
import Slider from "../Slider";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
