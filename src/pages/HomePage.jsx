import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUsers, FaBuilding, FaComments } from "react-icons/fa";
import parentImg from "../assets/parent.jpeg";
import daycareImg from "../assets/daycare.jpeg";
import { useState, useEffect } from "react";

function HomePage() {
  const navigate = useNavigate();

  // Simple window width listener to handle structural styling shifts dynamically
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#F3E8FF",
          padding: isMobile ? "40px 20px" : "80px 60px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: isMobile ? "60px" : "50px",
        }}
      >
        {/* Left Column - Parents */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              height: isMobile ? "200px" : "250px",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
              marginBottom: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              position: "relative",
            }}
          >
            <img
              className="hero-image"
              src={parentImg}
              alt="Parents"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: isMobile ? "26px" : "35px",
              fontWeight: "700",
              marginTop: isMobile ? "20px" : "45px",
              marginBottom: "15px",
              lineHeight: "1.3",
            }}
          >
            Find Your Ideal Daycare/Preschool
          </h1>

          <p
            style={{
              fontSize: isMobile ? "18px" : "22px",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "35px",
              maxWidth: "500px",
            }}
          >
            Simplify the search for your child's early education.
          </p>

          <button
            onClick={() => navigate("/survey")}
            style={{
              backgroundColor: "#8B5CF6",
              color: "white",
              border: "none",
              borderRadius: "40px",
              padding: isMobile ? "14px 28px" : "16px 36px",
              cursor: "pointer",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "600",
              display: "inline-block",
              marginTop: "auto", // Keeps button aligned if content heights vary slightly
            }}
          >
            Get Early Access
          </button>
        </div>

        {/* Right Column - Providers */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              height: isMobile ? "200px" : "250px",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
              marginBottom: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              className="hero-image"
              src={daycareImg}
              alt="Daycare"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: isMobile ? "26px" : "35px",
              fontWeight: "700",
              marginTop: isMobile ? "20px" : "45px",
              marginBottom: "15px",
              lineHeight: "1.3",
            }}
          >
            Elevate Your Daycare Operations
          </h1>

          <p
            style={{
              fontSize: isMobile ? "18px" : "22px",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "35px",
              maxWidth: "500px",
            }}
          >
            Optimize management, communication and growth.
          </p>

          <button
            onClick={() => navigate("/contact")}
            style={{
              backgroundColor: "#8B5CF6",
              color: "white",
              border: "none",
              borderRadius: "40px",
              padding: isMobile ? "14px 28px" : "16px 36px",
              cursor: "pointer",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "600",
              display: "inline-block",
              marginTop: "auto",
            }}
          >
            Schedule Call
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section
        style={{
          backgroundColor: "#f8f8f8",
          padding: isMobile ? "50px 20px" : "60px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          {/* Card 1 */}
          <div className="card" style={{ width: "100%", maxWidth: "350px", textAlign: "center" }}>
            <div style={{ marginBottom: "15px" }}>
              <FaUsers size={isMobile ? 45 : 55} color="#F58C50" />
            </div>
            <h3
              style={{
                fontSize: isMobile ? "24px" : "28px",
                fontWeight: "700",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              For Parents
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                margin: "0 auto",
              }}
            >
              Discover verified daycares/preschools, compare trusted reviews, and find the perfect environment for your child.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: "100%", maxWidth: "350px", textAlign: "center" }}>
            <div style={{ marginBottom: "15px" }}>
              <FaBuilding size={isMobile ? 45 : 55} color="#F58C50" />
            </div>
            <h3
              style={{
                fontSize: isMobile ? "24px" : "28px",
                fontWeight: "700",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              For Providers
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                margin: "0 auto",
              }}
            >
              Streamline operations, improve parent communication, and grow your enrollment with confidence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card survey-card" style={{ width: "100%", maxWidth: "350px", textAlign: "center" }}>
            <div style={{ marginBottom: "15px" }}>
              <FaComments size={isMobile ? 45 : 55} color="#F58C50" />
            </div>
            <h3
              style={{
                fontSize: isMobile ? "24px" : "28px",
                fontWeight: "700",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              Shape KINDERLY
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                margin: "0 auto",
              }}
            >
              Help us build a smarter childcare platform designed for both parents and daycare/ preschool providers.
            </p>
            <Link to="/survey" style={{ textDecoration: "none", display: "inline-block", width: "100%" }}>
              <button
                style={{
                  backgroundColor: "#7c4dff",
                  color: "white",
                  border: "none",
                  borderRadius: "40px",
                  padding: isMobile ? "14px 32px" : "16px 40px",
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "20px",
                  width: "100%",
                  maxWidth: "200px"
                }}
              >
                Take Survey
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;