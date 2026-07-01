import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Import the responsive stylesheet

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Kinderly"
          style={{
            height: "60px", // Slightly reduced height to fit compact spaces better
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Link>

      {/* Navigation */}
      <div className="nav-menu">
        <Link
          to="/"
          className="nav-link"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          className="nav-link"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          className="nav-link"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Contact
        </Link>

        <Link to="/survey" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#f58c50",
              color: "white",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              padding: "10px 24px", // Streamlined button spacing
              fontSize: "15px",
              fontWeight: "600",
              boxShadow: "0 4px 12px rgba(245,140,80,0.25)",
            }}
          >
            Survey
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;