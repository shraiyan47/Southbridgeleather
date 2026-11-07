"use client";
import { useMemo, useState } from "react";
import { photo } from "../../data";
type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
  tag: string;
};
export default function ProductGallery({ products }: { products: Product[] }) {
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState("all");
  const shown = useMemo(() => {
    const filtered =
      maxPrice === "all"
        ? [...products]
        : products.filter((p) => p.price <= Number(maxPrice));
    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);
    return filtered;
  }, [products, sort, maxPrice]);
  return;
  <>
    <div className="gallery-toolbar">
      <span>SHOWING {shown.length} PIECES</span>
      <div className="gallery-controls">
        <label>
          PRICE{" "}
          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="all">All prices</option>
            <option value="100">Under $100</option>
            <option value="200">Under $200</option>
            <option value="300">Under $300</option>
          </select>
        </label>
        <label>
          SORT{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>
    </div>
    <div className="product-grid">
      {shown.map((product, i) => (
        <article className="product-card" key={product.name}>
          <div
            className="product-image"
            style={{ backgroundImage: `url('${photo(product.image, 900)}')` }}
          >
            {product.tag && <span className="product-tag">{product.tag}</span>}
            <span className="product-number">0{i + 1}</span>
            <button className="quick-add" aria-label={`View ${product.name}`}>
              ↗
            </button>
          </div>
          <div className="product-details">
            <h2>{product.name}</h2>
            <span>${product.price}</span>
          </div>
          <p>Hand-finished leather · Made in Maine</p>
        </article>
      ))}
    </div>

    {shown.length === 0 && (
      <p className="empty-state">
        No pieces in this price range. Try another filter.
      </p>
    )}
  </>;
}
