import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-wordmark.png";
import { ArrowRight, Menu, Close } from "./icons";

/* The centre-facing portal lives on its own subdomain */
const CENTRES_URL = "https://centres.kribblecare.com/";

/* Section links point at the homepage; ScrollToTop scrolls to the hash. */
const LINKS = [
  { to: "/explore", label: "Explore", page: true },
  { to: "/#how-it-works", label: "How it works" },
  { to: "/#activities", label: "Activities" },
  { to: "/about", label: "About", page: true },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="k-nav">
      <div className="k-shell k-nav__inner">
        <Link to="/" className="k-nav__logo" onClick={close}>
          <img src={logo} alt="Kribble" width="96" height="30" />
        </Link>

        <div className={`k-nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((l) =>
            l.page ? (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={close}
                className={({ isActive }) => `k-nav__link ${isActive ? "is-active" : ""}`}
              >
                {l.label}
              </NavLink>
            ) : (
              <Link key={l.to} to={l.to} onClick={close} className="k-nav__link">
                {l.label}
              </Link>
            )
          )}
          {/* The blog is static HTML outside the React app, so a plain link
              (a router link would try to render it in-app and hit the 404). */}
          <a href="/blog/" className="k-nav__link" onClick={close}>
            Blog
          </a>

          {/* CTAs live inside the drawer on mobile */}
          <a href={CENTRES_URL} onClick={close} className="k-btn k-btn--ghost k-nav__cta-mobile">
            For Centres
          </a>
          <Link to="/waitlist" onClick={close} className="k-btn k-btn--primary k-nav__cta-mobile">
            Get early access <ArrowRight />
          </Link>
        </div>

        <div className="k-nav__actions">
          <a href={CENTRES_URL} className="k-btn k-btn--ghost k-nav__cta-desktop">
            For Centres
          </a>
          <Link to="/waitlist" className="k-btn k-btn--primary k-nav__cta-desktop">
            Get early access <ArrowRight />
          </Link>

          <button
            className="k-nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
