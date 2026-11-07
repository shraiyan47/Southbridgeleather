import Link from "next/link";
import { categories, photo } from "./data";

export default function Home() {
  return (
    <>
      <div className="announcement">
        A slower kind of making · Free shipping on orders over 2000 BDT
      </div>
      <header className="nav">
        <Link className="wordmark" href="/">
          SOUTHBRIDGE <span>LEATHER </span>
        </Link>
        <nav>
          <a className="nav-link" href="#collections">
            Shop
          </a>
          <a className="nav-link" href="#services">
            Our craft
          </a>
          <a className="nav-link" href="#tannery">
            The tannery
          </a>
        </nav>
        <a className="nav-cta" href="#contact">
          Get in touch <span>↗</span>
        </a>
      </header>
      <main>
        <section className="hero">
          <div
            className="hero-image"
            style={{
              backgroundImage: `url('${photo("photo-1520639888713-7851133b1ed0", 2000)}')`,
            }}
          />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="eyebrow light">MADE SLOWLY. CARRIED DAILY.</p>
            <h1>
              Good things
              <br />
              take <em>time.</em>
            </h1>
            <p className="hero-deck">
              Leather goods with a life of their own.
              <br />
              Made by hand, made to be kept.
            </p>
            <a className="button button-light" href="#collections">
              Explore the collection <span>↓</span>
            </a>
          </div>
          <div className="hero-caption">
            CRAFTED FROM THE GROUND UP <span>01 / 04</span>
          </div>
        </section>
        <section className="intro">
          <p className="eyebrow">A THOUGHTFUL WAY OF MAKING</p>
          <h2>
            Objects for the everyday,
            <br />
            <em>made extraordinary.</em>
          </h2>
          <p>
            From the first cut to the final stitch, every piece carries the mark
            of the hands that made it. We work with carefully selected hides and
            time-honoured techniques to create leather goods that grow better
            with every year.
          </p>
        </section>
        <section id="collections" className="collections section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COLLECTION</p>
              <h2>
                Find your <em>everyday.</em>
              </h2>
            </div>
            <Link className="text-link" href="/category/bags">
              Shop all pieces <span>↗</span>
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((item, i) => (
              <Link
                className={`category-card cat-${i}`}
                key={item.slug}
                href={`/category/${item.slug}`}
              >
                <div
                  className="category-image"
                  style={{
                    backgroundImage: `url('${photo(item.image, 1200)}')`,
                  }}
                />
                <div className="category-overlay" />
                <div className="category-info">
                  <span className="category-index">
                    0{i + 1} / 0{categories.length}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <span className="category-description">
                      {item.description}
                    </span>
                  </div>
                  <span className="round-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section id="services" className="services">
          <div
            className="service-image"
            style={{
              backgroundImage: `url('${photo("photo-1455390582262-044cdead277a", 1200)}')`,
            }}
          />
          <div className="service-content">
            <p className="eyebrow">MADE A LITTLE MORE PERSONAL</p>
            <h2>
              Made for you.
              <br />
              <em>Made by us.</em>
            </h2>
            <p>
              Some things are worth making your own. Choose the leather, colour,
              size and details. Our makers will bring your idea to life, one
              careful stitch at a time.
            </p>
            <div className="service-list">
              <div>
                <span>01</span>
                <p>
                  <b>Custom leather goods</b>
                  <small>Made to your measurements and everyday needs.</small>
                </p>
                <span>↗</span>
              </div>
              <div>
                <span>02</span>
                <p>
                  <b>Leather, made here</b>
                  <small>
                    From raw hide to beautifully finished crust leather.
                  </small>
                </p>
                <span>↗</span>
              </div>
              <div>
                <span>03</span>
                <p>
                  <b>Finishes with character</b>
                  <small>Choose your colour, texture and final finish.</small>
                </p>
                <span>↗</span>
              </div>
            </div>
            <a className="button button-dark" href="#contact">
              Tell us what you have in mind <span>↗</span>
            </a>
          </div>
        </section>
        <section id="tannery" className="tannery">
          <div
            className="tannery-image"
            style={{
              backgroundImage: `url('${photo("photo-1516937941344-00b4e0337589", 1600)}')`,
            }}
          />
          <div className="tannery-copy">
            <p className="eyebrow light">FROM OUR TANNERY</p>
            <h2>
              We know leather
              <br />
              from the <em>inside out.</em>
            </h2>
            <p>
              We are makers, and tanners. In our own production house, raw hides
              become supple, enduring leather through a process we know
              intimately. That means every detail — from the first finish to the
              last edge — is in our hands.
            </p>
            <a className="text-link text-link-light" href="#contact">
              Step inside our tannery <span>↗</span>
            </a>
          </div>
        </section>
        <section className="quote">
          <p className="eyebrow">BUILT TO BECOME YOURS</p>
          <blockquote>
            “The best things we own
            <br />
            are the things that <em>stay.”</em>
          </blockquote>
          <span>LEATHER THAT LIVES WITH YOU</span>
        </section>
        <section id="contact" className="contact">
          <div className="contact-copy">
            <p className="eyebrow">COME SAY HELLO</p>
            <h2>
              Good work starts
              <br />
              with a <em>conversation.</em>
            </h2>
            <p>
              Have an idea, a question, or just want to see how it’s made? We’d
              love to hear from you.
            </p>
            <a
              className="contact-email"
              href="mailto:hello@southbridgeleather.com"
            >
              hello@southbridgeleather.com <span>↗</span>
            </a>
            <div className="address">
              <b>THE WORKSHOP & TANNERY</b>
              <span>18 Foundry Lane, Portland, ME 04101</span>
              <span>Monday – Friday, 9am – 5pm</span>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              title="Map showing Southbridge workshop location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.1029475875412!2d90.3670160242583!3d23.735038967157426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bface3b20b91%3A0xc4f3fe60d5c48d7b!2sDhaka%20Tanneries%20Limited!5e1!3m2!1sen!2sbd!4v1794066524593!5m2!1sen!2sbd"
            />
            <a
              className="map-label"
              href="https://www.openstreetmap.org/"
              target="_blank"
              rel="noreferrer"
            >
              FIND THE WORKSHOP <span>↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <Link className="wordmark footer-mark" href="/">
            SOUTHBRIDGE LEATHER 
          </Link>
          <p>
            Made slowly. Carried daily.
            <br />
            Portland, Maine · Est. 2014
          </p>
          <div className="footer-links">
            <a href="#collections">Shop</a>
            <a href="#services">Custom work</a>
            <a href="#tannery">Our tannery</a>
            <a href="mailto:hello@southbridgeleather.com">Contact</a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/southbridgeleather">Facebook ↗</a>
            <a href="https://www.instagram.com/southbridgeleather/">Instagram ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          {"© 2026 Southbridge Leather Co."}
          <span>MADE WITH CARE, IN MAINE</span>
          <a href="#">Privacy & terms</a>
        </div>
      </footer>
    </>
  );
}
