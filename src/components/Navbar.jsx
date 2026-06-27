import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 80px",
        backgroundColor: "#fff",
        minHeight: "75px",
        borderBottom: "1px solid #f0f0f0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Kinderly"
          style={{
            height: "70px",
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
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

        <Link
          to="/survey"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              backgroundColor: "#f58c50",
              color: "white",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              padding: "14px 30px",
              fontSize: "16px",
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