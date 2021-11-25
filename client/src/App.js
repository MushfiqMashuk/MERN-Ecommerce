import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Product from "./components/pages/Product";
import ProductList from "./components/pages/ProductList";
import Register from "./components/pages/Register";
import "./styles/App.css";

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={ user? "Home page" : <Login />} />
        <Route path="/register" element={user? "Home page" : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
