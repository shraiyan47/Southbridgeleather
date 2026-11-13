import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="announcement">
        A slower kind of making · Free shipping on orders over 2000 BDT
      </div>

      <header className="nav">
        <Link className="wordmark" href="/">
          SOUTHBRIDGE <span>LEATHER </span>
        </Link>

        <nav aria-label="Main navigation">
          <Link className="nav-link" href="/#collections">
            Shop
          </Link>
          <Link className="nav-link" href="/#services">
            Our craft
          </Link>
          <Link className="nav-link" href="/#tannery">
            The tannery
          </Link>
        </nav>

        <Link className="nav-cta" href="/#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </header>
    </>
  );
}
