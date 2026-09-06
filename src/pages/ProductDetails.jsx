import React, { useState } from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star
} from "lucide-react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  addToCart
} from "../store/cartSlice";

import {
  toggleWishlist
} from "../store/wishlistSlice";

import {
  products
} from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const dispatch = useDispatch();

  const [quantity, setQuantity] =
    useState(1);

  const isSaved = useSelector(
    (state) =>
      state.wishlist.some(
        (item) =>
          item.id === product?.id
      )
  );

  if (!product) {
    return (
      <div className="empty-state section">

        <h2>
          Product not found
        </h2>

        <Link
          to="/shop"
          className="primary-btn small"
        >
          Back to Shop
        </Link>

      </div>
    );
  }

  const handleAddToCart = () => {

    for (
      let i = 0;
      i < quantity;
      i++
    ) {
      dispatch(addToCart(product));
    }

  };

  return (
    <section className="detail-page section">

      <Link
        to="/shop"
        className="back-link"
      >
        <ArrowLeft size={18} />
        Back to shop
      </Link>

      <div className="detail-layout">

        <div className="detail-image">

          <img
            src={product.image}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.src =
                "https://placehold.co/800x800/e7f5f3/006d68?text=ShopCraft";
            }}
          />

        </div>

        <div className="detail-copy">

          <span className="eyebrow">
            {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <div className="detail-rating">

            <Star
              size={17}
              fill="currentColor"
            />

            {product.rating}

            <span>
              • Loved by our customers
            </span>

          </div>

          <div className="detail-price">

            ${product.price.toFixed(2)}

            {product.oldPrice && (
              <del>
                ${product.oldPrice.toFixed(2)}
              </del>
            )}

          </div>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-actions">

            <div className="quantity">

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(
                      1,
                      quantity - 1
                    )
                  )
                }
              >
                <Minus size={17} />
              </button>

              <span>
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(
                    quantity + 1
                  )
                }
              >
                <Plus size={17} />
              </button>

            </div>

            <button
              className="primary-btn"
              onClick={
                handleAddToCart
              }
            >
              <ShoppingCart
                size={19}
              />
              Add to Cart
            </button>

            <button
              className={`wish-large ${
                isSaved
                  ? "saved"
                  : ""
              }`}
              onClick={() =>
                dispatch(
                  toggleWishlist(
                    product
                  )
                )
              }
            >
              <Heart
                size={20}
                fill={
                  isSaved
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

          <div className="detail-note">
            ✓ In stock · Ships in 1–2
            business days
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;