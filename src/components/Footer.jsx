import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-purple.png";

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
              India's first verified discovery platform for daycares and
              preschools, so every mother can find care she trusts.
            </p>
          </div>

          <div className="k-footer__col">
            <h4>Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/survey">Survey</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="k-footer__col">
            <h4>Follow Us</h4>
            <div className="k-footer__social">
              <a
                href="https://www.facebook.com/share/19BUoGWQUm/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Kribble on Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/kribblecare"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Kribble on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/kribblecare/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Kribble on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="k-footer__bottom">
          © 2026 Kribble. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
