import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HelpButton from "./components/HelpButton";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";

function App() {
  const darkMode = useSelector((state) => state.ui.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app-shell">

      {/* ONLY ONE HEADER */}
      <Header />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Routes>
      </main>

      {/* ONLY ONE FOOTER */}
      <Footer />

      <HelpButton />

    </div>
  );
}

export default App;