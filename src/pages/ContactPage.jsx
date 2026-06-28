import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function ContactPage() {
    const navigate = useNavigate();
  return (
    <>
     

      {/* Embedded Media Queries for Responsiveness */}
      <style>{`
        .responsive-container {
          flex-direction: row;
        }
        .responsive-box {
          width: 520px;
        }
        .cards-wrapper {
          justify-content: center;
        }
        .feedback-banner {
          flex-direction: row;
          margin: 80px auto;
          padding: 60px;
        }
        .hide-on-mobile {
          display: block;
        }

        @media (max-width: 992px) {
          .responsive-container {
            flex-direction: column-reverse !important;
            padding: 40px 20px !important;
            gap: 40px !important;
          }
          .responsive-box {
            width: 100% !important;
          }
          .feedback-banner {
            flex-direction: column !important;
            margin: 40px 20px !important;
            padding: 40px 20px !important;
            gap: 30px !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
          h1 { font-size: 38px !important; }
          h2 { font-size: 32px !important; }
        }
      `}</style>

      {/* Hero Section */}
      <div
        className="responsive-container"
        style={{
          background: "#F3E8FF",
          padding: "70px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <div style={{ flex: 1, width: "100%" }}>
          <span
            style={{
              background: "#fff",
              color: "#8B5CF6",
              padding: "10px 22px",
              borderRadius: "30px",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            GET IN TOUCH
          </span>

          <h1
            style={{
              fontSize: "56px",
              marginTop: "30px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            We'd Love to Hear From You!
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "620px",
            }}
          >
            Whether you're a parent looking for trusted childcare or a daycare
            provider interested in joining Kinderly, we're here to help every
            step of the way.
          </p>

          <div
            className="responsive-box"
            style={{
              marginTop: "45px",
              background: "#FFF7EA",
              borderRadius: "22px",
              padding: "22px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7C3AED",
                fontSize: "30px",
                flexShrink: 0,
              }}
            >
              <FaEnvelope />
            </div>

            <div>
              <h4 style={{ margin: 0, fontSize: "20px", lineHeight: "1.4" }}>
                We typically respond within 24 hours
              </h4>
              <p
                style={{
                  marginTop: "6px",
                  marginBottom: 0,
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                Thank you for being a part of the Kinderly community! 💜
              </p>
            </div>
          </div>
        </div>

        {/* Right side Image */}
        <div style={{ flex: 1, width: "100%" }}>
          <img
            src="/contact-img.png"
            alt="Contact Kinderly"
            style={{
              width: "100%",
              borderRadius: "30px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Cards Info Section */}
      <div
        style={{
          background: "#ffffff",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "46px",
            marginBottom: "20px",
          }}
        >
          Let's Connect
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Have questions or want to learn more about Kinderly? We're always
          happy to connect.
        </p>

        <div
          className="cards-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Card 1: Email */}
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              background: "#fff",
              borderRadius: "25px",
              padding: "50px 40px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#F3E8FF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px",
              }}
            >
              <FaEnvelope size={34} color="#7C3AED" />
            </div>
            <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>Email Us</h3>
            <p
              style={{
                color: "#7C3AED",
                fontWeight: "600",
                marginBottom: "15px",
                fontSize: "18px",
                wordBreak: "break-word",
              }}
            >
              Kinderlyconnect@gmail.com
            </p>
            <p style={{ color: "#666", margin: 0 }}>
              We're always happy to help.
            </p>
          </div>

          {/* Card 2: Location */}
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              background: "#fff",
              borderRadius: "25px",
              padding: "50px 40px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#DDFBF7",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px",
              }}
            >
              <FaMapMarkerAlt size={34} color="#14B8A6" />
            </div>
            <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
              Our Location
            </h3>
            <p
              style={{
                color: "#14B8A6",
                fontWeight: "600",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              India
            </p>
            <p style={{ color: "#666", margin: 0 }}>
              Proudly building for families across the country.
            </p>
          </div>

          {/* Card 3: Hours */}
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              background: "#fff",
              borderRadius: "25px",
              padding: "50px 40px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#FFF1E5",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px",
              }}
            >
              <FaClock size={34} color="#F97316" />
            </div>
            <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
              Office Hours
            </h3>
            <p
              style={{
                color: "#F97316",
                fontWeight: "600",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              Monday - Friday
            </p>
            <p style={{ color: "#666", margin: 0 }}>9:00 AM - 6:00 PM IST</p>
          </div>
        </div>
      </div>

      {/* Feedback Banner Section */}
      <div
        className="feedback-banner"
        style={{
          background: "#F3E8FF",
          maxWidth: "1450px",
          borderRadius: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        <div
          className="hide-on-mobile"
          style={{
            fontSize: "80px",
            color: "#8B5CF6",
            flex: "0.4",
            textAlign: "center",
          }}
        >
          <FaPaperPlane />
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
            Your Feedback Shapes Kinderly
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Your opinions and suggestions help us create a better childcare
            experience for everyone.
          </p>
          <button
      onClick={() => navigate("/survey")} // Change "/survey" to your exact route path
      style={{
        marginTop: "35px",
        background: "#6D4AFF",
        color: "white",
        border: "none",
        borderRadius: "35px",
        padding: "16px 38px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(109,74,255,.25)",
      }}
    >
      Take the Survey →
    </button>
        </div>

        <div
          className="hide-on-mobile"
          style={{
            flex: "0.4",
            textAlign: "center",
          }}
        >
          <FaHeart size={65} color="#A855F7" style={{ marginTop: "12px" }} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;