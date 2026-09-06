import React, { useState } from "react";

import {
  Link
} from "react-router-dom";

function Login() {
  const [success, setSuccess] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="auth-page section">

      <div className="auth-card">

        <span className="eyebrow">
          WELCOME BACK
        </span>

        <h1>
          Sign in to ShopCraft
        </h1>

        <p>
          Access your saved products
          and shopping preferences.
        </p>

        {success && (
          <div className="success-message">
            Demo login successful!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
        >

          <label>
            Email

            <input
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password

            <input
              type="password"
              required
              minLength="6"
              placeholder="••••••••"
            />
          </label>

          <button
            className="primary-btn"
            type="submit"
          >
            Sign in
          </button>

        </form>

        <small>
          This is a UI-only authentication
          page for the minor project.
        </small>

        <Link
          to="/shop"
          className="back-link"
        >
          Continue shopping →
        </Link>

      </div>

    </section>
  );
}

export default Login;