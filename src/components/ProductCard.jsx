import React from "react";
import { Link } from "react-router-dom";

import {
  Heart,
  Star,
  ShoppingBag
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../store/cartSlice";
import {
  toggleWishlist
} from "../store/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist
  );

  const isSaved = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <article className="product-card">

      <div className="product-image-wrap">

        {product.badge && (
          <span
            className={`badge ${
              product.badge === "Sale"
                ? "sale"
                : ""
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          className={`wish-btn ${
            isSaved ? "saved" : ""
          }`}
          onClick={() =>
            dispatch(toggleWishlist(product))
          }
        >
          <Heart
            size={19}
            fill={
              isSaved
                ? "currentColor"
                : "none"
            }
          />
        </button>

        <Link
          to={`/product/${product.id}`}
        >
          <img
            src={product.image}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.src =
                "https://placehold.co/700x700/e7f5f3/006d68?text=ShopCraft";
            }}
          />
        </Link>

      </div>

      <div className="product-info">

        <div className="category-label">
          {product.category}
        </div>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="rating">
          <Star
            size={15}
            fill="currentColor"
          />
          {product.rating}
        </div>

        <div className="product-row">

          <div>
            <strong>
              ${product.price.toFixed(2)}
            </strong>

            {product.oldPrice && (
              <del>
                ${product.oldPrice.toFixed(2)}
              </del>
            )}
          </div>

          <button
            className="mini-cart"
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            <ShoppingBag size={18} />
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;