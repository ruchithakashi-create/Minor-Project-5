import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Leaf,
  Truck,
  ShieldCheck,
  RotateCcw
} from "lucide-react";

import ProductCard from "../components/ProductCard";

import {
  products,
  categories
} from "../data/products";

function Home() {
  const featuredProducts =
    products.slice(0, 8);

  return (
    <>
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="eyebrow orange">
            NEW ARRIVALS 2026
          </span>

          <h1>
            Objects worth
            <br />
            <em>living with.</em>
          </h1>

          <p>
            Thoughtfully sourced goods for
            everyday life — kitchen, home,
            apparel, and workspace.
          </p>

          <div className="hero-actions">

            <Link
              to="/shop"
              className="primary-btn"
            >
              Shop All Products
            </Link>

            <Link
              to="/shop"
              className="outline-btn"
            >
              Browse Categories
            </Link>

          </div>

        </div>
      </section>

      <section className="benefits">

        <div>
          <Truck />

          <span>
            <b>Free shipping</b>
            <small>
              On orders over $75
            </small>
          </span>
        </div>

        <div>
          <Leaf />

          <span>
            <b>Thoughtfully made</b>
            <small>
              Quality-first products
            </small>
          </span>
        </div>

        <div>
          <ShieldCheck />

          <span>
            <b>Secure checkout</b>
            <small>
              Your data stays protected
            </small>
          </span>
        </div>

        <div>
          <RotateCcw />

          <span>
            <b>Easy returns</b>
            <small>
              30-day return policy
            </small>
          </span>
        </div>

      </section>

      <section className="featured-section section">

        <div className="section-heading">

          <div>
            <span className="eyebrow">
              HAND PICKED
            </span>

            <h2>
              Featured this season
            </h2>
          </div>

          <Link
            to="/shop"
            className="view-all"
          >
            View all
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="product-grid">

          {featuredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

      </section>

      <section className="category-section section">

        <div className="section-heading">

          <div>
            <span className="eyebrow">
              EXPLORE
            </span>

            <h2>
              Shop by category
            </h2>
          </div>

        </div>

        <div className="category-grid">

          {categories
            .slice(1)
            .map((category, index) => (
              <Link
                key={category}
                to={`/shop?category=${category}`}
                className={`category-tile tile-${
                  index + 1
                }`}
              >
                <span>{category}</span>
                <ArrowRight size={20} />
              </Link>
            ))}

        </div>

      </section>
    </>
  );
}

export default Home;