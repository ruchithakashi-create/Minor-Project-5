import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-column footer-about">
          <div className="footer-brand">
            <span className="footer-logo">◇</span>
            ShopCraft
          </div>

          <p>
            Thoughtfully sourced goods for everyday life.
          </p>
        </div>

        {/* SHOP */}
        <div className="footer-column">
          <h4>Shop</h4>

          <Link to="/shop">
            All Products
          </Link>

          <Link to="/shop?category=Kitchen">
            Kitchen
          </Link>

          <Link to="/shop?category=Apparel">
            Apparel
          </Link>

          <Link to="/shop?category=Home">
            Home
          </Link>
        </div>

        {/* CUSTOMER */}
        <div className="footer-column">
          <h4>Customer</h4>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/login">
            Login
          </Link>
        </div>

        {/* PROJECT */}
        <div className="footer-column">
          <h4>Project</h4>

          <p>React + Redux Toolkit</p>
          <p>Responsive UI</p>
          <p>Modern E-commerce</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShopCraft. Built as a Web Development Minor Project.
      </div>

    </footer>
  );
}

export default Footer;