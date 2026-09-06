import React from "react";

import {
  Link
} from "react-router-dom";

import {
  Heart
} from "lucide-react";

import {
  useSelector
} from "react-redux";

import ProductCard from "../components/ProductCard";

function Wishlist() {
  const wishlist = useSelector(
    (state) => state.wishlist
  );

  return (
    <section className="section">

      <div className="shop-title">

        <div>

          <span className="eyebrow">
            SAVED FOR LATER
          </span>

          <h1>
            Wishlist
          </h1>

          <p>
            Your favorite ShopCraft finds.
          </p>

        </div>

      </div>

      {wishlist.length > 0 ? (

        <div className="product-grid">

          {wishlist.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

      ) : (

        <div className="empty-state">

          <Heart size={52} />

          <h2>
            Your wishlist is waiting
          </h2>

          <p>
            Save products you love
            by tapping the heart.
          </p>

          <Link
            to="/shop"
            className="primary-btn small"
          >
            Explore products
          </Link>

        </div>

      )}

    </section>
  );
}

export default Wishlist;