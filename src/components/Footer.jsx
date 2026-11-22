import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-wordmark.png";
import { trackCtaClick } from "../lib/analytics";

/* Plain <a> for the blog: it's static HTML outside the React app. */
const PARENT_LINKS = [
  { to: "/explore", label: "Explore centres" },
  { to: "/#how-it-works", label: "How it works" },
  { to: "/#one-day", label: "One-day care" },
  { to: "/#activities", label: "Activities" },
  { to: "/#faq", label: "FAQ" },
  { href: "/blog/", label: "Parent guides" },
];

const COMPANY_LINKS = [
  { to: "/about", label: "About us" },
  { to: "/waitlist", label: "Join the waitlist" },
  { to: "/survey", label: "Take the survey" },
  { to: "/contact", label: "Contact" },
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
              <img src={logo} alt="Kribble" width="115" height="36" />
            </span>
            <p>
              Daycares, preschools and activities for children from 15 months
              to 10 years, every centre visited in person. Starting in Gurugram.
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
            <h3>For Parents</h3>
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
            <h3>Kribble</h3>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="k-footer__col">
            <h3>For Childcare Centers</h3>
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
            <a href="mailto:team@kribblecare.com">team@kribblecare.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
