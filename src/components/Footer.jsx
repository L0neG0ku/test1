import logo from "../assets/logo.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

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
              marginBottom: "15px",
           }}
         />

         <h3
            style={{
               marginTop: "15px",
               marginBottom: "10px",
               fontSize: "28px",
               fontWeight: "700",
               color: "#222",
            }}
          >
          Kinderly
         </h3>
           <p
            style={{
              marginTop: "10px",
              maxWidth: "260px",
              lineHeight: "1.8",
              color: "#555",
              }}
             >   

            Building the future of childcare discovery through trust, transparency and technology.
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