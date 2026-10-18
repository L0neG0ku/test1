import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowRight } from "../components/icons";

/* Shown for any URL that isn't a real page. Vercel serves it with a 404 status
   (dist/404.html), so search engines don't index stray URLs as duplicates of
   the homepage. */
function NotFoundPage() {
  return (
    <>
      <section className="k-section k-bg-soft">
        <div className="k-shell" style={{ textAlign: "center", maxWidth: 640 }}>
          <p className="k-eyebrow" style={{ justifyContent: "center" }}>
            Page not found
          </p>
          <h1 className="k-h2" style={{ marginBottom: 18 }}>
            This page wandered off.
          </h1>
          <p className="k-lead" style={{ margin: "0 auto 32px" }}>
            The link may be old or mistyped. Everything else is right where you
            left it.
          </p>
          <div className="k-hero__actions" style={{ justifyContent: "center" }}>
            <Link to="/" className="k-btn k-btn--primary">
              Back to Kribble <ArrowRight />
            </Link>
            <a href="/blog/" className="k-btn k-btn--ghost">
              Read the blog
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFoundPage;
