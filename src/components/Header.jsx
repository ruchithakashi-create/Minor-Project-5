import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  Moon,
  Sun,
  Menu,
  X
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/uiSlice";

function Header() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartCount = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  const darkMode = useSelector((state) => state.ui.darkMode);

  const handleSearch = (event) => {
    event.preventDefault();

    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/shop");
    }

    setMobileOpen(false);
  };

  return (
    <header className="site-header">

      <div className="nav-wrap">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={() => setMobileOpen(false)}
        >
          <span className="brand-mark">◇</span>
          <span>ShopCraft</span>
        </Link>

        {/* SEARCH */}
        <form
          className="search-box"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <button type="submit" aria-label="Search">
            <Search size={22} />
          </button>
        </form>

        {/* NAVIGATION */}
        <nav className={`main-nav ${mobileOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setMobileOpen(false)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/wishlist"
            className="nav-icon"
            onClick={() => setMobileOpen(false)}
          >
            <Heart size={20} />
            <span>Wishlist</span>
          </NavLink>

          {/* DARK MODE */}
          <button
            type="button"
            className="icon-btn"
            onClick={() => dispatch(toggleDarkMode())}
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={21} />
            ) : (
              <Moon size={21} />
            )}
          </button>

          {/* CART */}
          <Link
            to="/cart"
            className="cart-btn"
            onClick={() => setMobileOpen(false)}
          >
            <ShoppingCart size={20} />

            <span>Cart</span>

            <span className="cart-count">
              {cartCount}
            </span>
          </Link>

        </nav>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Open navigation menu"
        >
          {mobileOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

    </header>
  );
}

export default Header;