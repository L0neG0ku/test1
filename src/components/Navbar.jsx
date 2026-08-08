import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-purple.png";
import { ArrowRight, Menu, Close } from "./icons";

const LINKS = [
  { to: "/problem", label: "Problem" },
  { to: "/solution", label: "Solution" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/team", label: "Team" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  return (
    <nav className="k-nav">
      <div className="k-shell k-nav__inner">
        <Link to="/" className="k-nav__logo" onClick={close}>
          <img src={logo} alt="Kribble" />
        </Link>

        <div className={`k-nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={close}
              className={({ isActive }) =>
                `k-nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* CTAs live inside the drawer on mobile */}
          <button
            type="button"
            className="k-btn k-btn--ghost k-nav__cta-mobile"
            onClick={(e) => e.preventDefault()}
          >
            Centres
          </button>
          <Link
            to="/contact"
            onClick={close}
            className="k-btn k-btn--dark k-nav__cta-mobile"
          >
            Get in touch <ArrowRight />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Placeholder until the centre-facing product exists */}
          <button
            type="button"
            className="k-btn k-btn--ghost k-nav__cta-desktop"
            onClick={(e) => e.preventDefault()}
          >
            Centres
          </button>

          <Link
            to="/contact"
            className={`k-btn k-btn--dark k-nav__cta-desktop ${
              pathname === "/contact" ? "is-active" : ""
            }`}
          >
            Get in touch <ArrowRight />
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
