import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, photo, products } from "../../data";
import Nav from "../../../component/nav";
import ProductGallery from "./product-gallery";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();
  const list = products.filter((product) => product.category === category.slug);

  return (
    <>
      <Nav />
      <main className="category-page">
        <div className="breadcrumbs">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>THE COLLECTION</span>
          <span>/</span>
          <span>{category.short.toUpperCase()}</span>
        </div>
        <section
          className="category-banner"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(27,25,21,.62),rgba(27,25,21,.08)),url('${photo(category.image, 1800)}')`,
          }}
        >
          <p className="eyebrow light">
            THE COLLECTION · 0{categories.indexOf(category) + 1}
          </p>
          <h1>
            {category.title}
            <em>.</em>
          </h1>
          <p>{category.description}</p>
        </section>
        <div className="collection-intro">
          <div>
            <p className="eyebrow">MADE TO GO WITH YOU</p>
            <p>
              Considered forms, honest materials, and details that reveal
              themselves over time.
            </p>
          </div>
          <span>{list.length} PIECES</span>
        </div>
        <ProductGallery products={list} />
        <div className="category-back">
          <Link className="text-link" href="/#collections">
            ← Back to all collections
          </Link>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <Link className="wordmark footer-mark" href="/">
            SOUTHBRIDGE <span>LEATHER </span>
          </Link>
          <p>
            Made slowly. Carried daily.
            <br />
            Portland, Maine · Est. 2014
          </p>
          <div className="footer-links">
            <a href="/#collections">Shop</a>
            <a href="/#services">Custom work</a>
            <a href="/#tannery">Our tannery</a>
            <a href="mailto:info@southbridgeleather.com">Contact</a>
          </div>
          <div className="social">
            <a href="#">Instagram ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Southbridge LEATHER </span>
          <span>MADE WITH CARE, IN MAINE</span>
          <a href="/privacy-policy">Privacy & terms</a>
        </div>
      </footer>
    </>
  );
}
