import logo from "../assets/logo.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navigation.css"; // Import the responsive stylesheet

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-brand">
          <img
            src={logo}
            alt="Kinderly"
            style={{
              width: "90px",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          />

          <h3
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              fontSize: "24px",
              fontWeight: "700",
              color: "#222",
            }}
          >
            Kinderly
          </h3>
          <p
            style={{
              marginTop: "5px",
              maxWidth: "260px",
              lineHeight: "1.6",
              color: "#555",
              fontSize: "14px",
            }}
          >
            India's first verified discovery platform for daycares and preschools, so every mother can find care she trusts.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">About</a>
          <a href="/survey">Survey</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Kinderly. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;