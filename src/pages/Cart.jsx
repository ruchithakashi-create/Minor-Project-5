import React from "react";

import {
  Link
} from "react-router-dom";

import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag
} from "lucide-react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  clearCart,
  decreaseQty,
  increaseQty,
  removeFromCart
} from "../store/cartSlice";

function Cart() {
  const cart = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="empty-state section cart-empty">

        <ShoppingBag size={56} />

        <h1>
          Your cart is empty
        </h1>

        <p>
          Looks like you haven't
          added anything yet.
        </p>

        <Link
          to="/shop"
          className="primary-btn"
        >
          Start Shopping
        </Link>

      </section>
    );
  }

  return (
    <section className="section cart-page">

      <div className="shop-title">

        <div>

          <span className="eyebrow">
            YOUR BAG
          </span>

          <h1>
            Shopping cart
          </h1>

          <p>
            {itemCount} item
            {itemCount !== 1
              ? "s"
              : ""} ready for checkout.
          </p>

        </div>

        <button
          className="text-danger"
          onClick={() =>
            dispatch(clearCart())
          }
        >
          Clear cart
        </button>

      </div>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
                onError={(event) => {
                  event.currentTarget.src =
                    "https://placehold.co/180x180/e7f5f3/006d68?text=ShopCraft";
                }}
              />

              <div className="cart-item-main">

                <span className="category-label">
                  {item.category}
                </span>

                <Link
                  to={`/product/${item.id}`}
                >
                  <h3>
                    {item.name}
                  </h3>
                </Link>

                <span>
                  ${item.price.toFixed(2)}
                </span>

              </div>

              <div className="quantity">

                <button
                  onClick={() =>
                    dispatch(
                      decreaseQty(
                        item.id
                      )
                    )
                  }
                >
                  <Minus size={16} />
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(
                      increaseQty(
                        item.id
                      )
                    )
                  }
                >
                  <Plus size={16} />
                </button>

              </div>

              <strong>
                $
                {(
                  item.price *
                  item.quantity
                ).toFixed(2)}
              </strong>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(
                    removeFromCart(
                      item.id
                    )
                  )
                }
              >
                <Trash2 size={18} />
              </button>

            </div>

          ))}

        </div>

        <aside className="summary">

          <h2>
            Order summary
          </h2>

          <div>
            <span>
              Subtotal
            </span>

            <strong>
              ${total.toFixed(2)}
            </strong>
          </div>

          <div>
            <span>
              Shipping
            </span>

            <strong>
              {total >= 75
                ? "Free"
                : "$7.00"}
            </strong>
          </div>

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              $
              {(
                total >= 75
                  ? total
                  : total + 7
              ).toFixed(2)}
            </strong>

          </div>

          <button
            className="primary-btn checkout"
            onClick={() =>
              alert(
                "Demo checkout successful!"
              )
            }
          >
            Checkout
            <ArrowRight size={18} />
          </button>

          <p className="secure-note">
            Secure demo checkout ·
            No payment is collected
          </p>

        </aside>

      </div>

    </section>
  );
}

export default Cart;