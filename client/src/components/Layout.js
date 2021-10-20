import React from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Nav from "./Nav";
import Newsletter from "./Newsletter";

export default function Layout({ children, cart }) {
  return (
    <div>
      <Announcement />
      <Nav />
      {children}
      {!cart && <Newsletter />}
      <Footer />
    </div>
  );
}
