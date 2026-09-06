import React, { useMemo, useState } from "react";

import {
  useSearchParams
} from "react-router-dom";

import {
  SlidersHorizontal,
  SearchX
} from "lucide-react";

import ProductCard from "../components/ProductCard";

import {
  products,
  categories
} from "../data/products";

function Shop() {
  const [params, setParams] =
    useSearchParams();

  const [search, setSearch] = useState(
    params.get("search") || ""
  );

  const [category, setCategory] =
    useState(
      params.get("category") || "All"
    );

  const [sort, setSort] =
    useState("featured");

  const filteredProducts = useMemo(() => {

    let result = products.filter(
      (product) => {

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          category === "All" ||
          product.category === category;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

    if (sort === "low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;

  }, [search, category, sort]);

  const changeCategory = (value) => {
    setCategory(value);

    if (value === "All") {
      setParams({});
    } else {
      setParams({
        category: value
      });
    }
  };

  return (
    <section className="shop-page section">

      <div className="shop-title">

        <div>
          <span className="eyebrow">
            THE COLLECTION
          </span>

          <h1>
            All products
          </h1>

          <p>
            Find useful, beautiful things
            for everyday living.
          </p>
        </div>

        <div className="result-count">
          {filteredProducts.length}
          {" "}products
        </div>

      </div>

      <div className="shop-toolbar">

        <div className="category-filters">

          <SlidersHorizontal size={18} />

          {categories.map(
            (item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  changeCategory(item)
                }
              >
                {item}
              </button>
            )
          )}

        </div>

        <div className="toolbar-right">

          <input
            type="text"
            placeholder="Search in shop..."
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />

          <select
            value={sort}
            onChange={(event) =>
              setSort(
                event.target.value
              )
            }
          >
            <option value="featured">
              Sort: Featured
            </option>

            <option value="low">
              Price: Low to high
            </option>

            <option value="high">
              Price: High to low
            </option>

            <option value="rating">
              Top rated
            </option>
          </select>

        </div>

      </div>

      {filteredProducts.length > 0 ? (

        <div className="product-grid">

          {filteredProducts.map(
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

          <SearchX size={48} />

          <h2>
            No products found
          </h2>

          <p>
            Try another search term
            or category.
          </p>

          <button
            className="primary-btn small"
            onClick={() => {
              setSearch("");
              changeCategory("All");
            }}
          >
            Clear filters
          </button>

        </div>
      )}

    </section>
  );
}

export default Shop;