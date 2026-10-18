import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-purple.png";
import { trackCtaClick } from "../lib/analytics";

/* Parent-facing links all point at pages that exist on the site. */
const PARENT_LINKS = [
  { to: "/why-kribble", label: "Why Kribble" },
  { to: "/what-we-cover", label: "What We Cover" },
  { to: "/why-parents", label: "Why Parents Love It" },
  { to: "/faq", label: "FAQ" },
  { to: "/survey", label: "Take the Survey" },
  { to: "/about", label: "About Kribble" },
  // Static pages outside the React app, so rendered as a plain <a>.
  { href: "/blog/", label: "Blog" },
];

/* Centre-facing product does not exist yet, so these are inert for now —
   same as the Centres button in the navbar. */
const CENTRE_LINKS = [
  "Partner With Us",
  "How It Works",
  "Benefits",
  "Schedule a Demo",
];

const SOCIALS = [
  {
    href: "https://www.facebook.com/share/19BUoGWQUm/",
    label: "Kribble on Facebook",
    Icon: FaFacebook,
  },
  {
    href: "https://www.instagram.com/kribblecare",
    label: "Kribble on Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/company/kribblecare/",
    label: "Kribble on LinkedIn",
    Icon: FaLinkedin,
  },
];

function Footer() {
  return (
    <footer className="k-footer">
      <div className="k-shell">
        <div className="k-footer__content">
          <div className="k-footer__brand">
            <span className="k-footer__logo">
              <img src={logo} alt="Kribble" />
            </span>
            <p>
              A verified discovery platform for daycares and preschools,
              starting in Gurugram, so every parent can find care they trust.
            </p>

            <div className="k-footer__social">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="k-footer__col">
            <h4>For Parents</h4>
            {PARENT_LINKS.map((l) =>
              l.href ? (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              )
            )}
          </div>

          <div className="k-footer__col">
            <h4>For Childcare Centers</h4>
            {CENTRE_LINKS.map((label) => (
              <button
                key={label}
                type="button"
                className="k-footer__soon"
                onClick={(e) => {
                  e.preventDefault();
                  // No demo or partner form exists yet, so record the interest as a click.
                  trackCtaClick(label.toLowerCase().replace(/\s+/g, "_"));
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="k-footer__bottom">
          <span>© 2026 Little Orbit Technology Private Limited. All rights reserved.</span>

          <nav className="k-footer__legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
