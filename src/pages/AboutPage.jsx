import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaComments,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import childcareImg from "../assets/childcare.png";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* 
        Injecting a responsive CSS block inside the component.
        This handles switching horizontal rows into vertical stacks on mobile,
        and ensures your 680px wide cards collapse beautifully on smaller viewports.
      */}
      <style>{`
        .responsive-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          padding: 60px;
        }
        .serve-card {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
          max-width: 680px;
          min-height: 330px;
          background: #F8F4FF;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s ease;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .responsive-section {
            flex-direction: column !important;
            padding: 40px 20px !important;
            gap: 30px !important;
            text-align: center;
          }
          .responsive-section > div {
            width: 100% !important;
          }
          .responsive-section img {
            max-height: 300px;
          }
          .serve-card {
            flex-direction: column !important;
            height: auto !important;
            max-width: 100%;
          }
          .serve-card img {
            width: 100% !important;
            height: 200px !important;
          }
          .section-padding {
            padding: 40px 20px !important;
          }
          .main-heading {
            font-size: 38px !important;
          }
          .sub-heading {
            font-size: 32px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="responsive-section" style={{ background: "#F3E8FF" }}>
        <div style={{ flex: 1 }}>
          <h1
            className="main-heading"
            style={{
              fontSize: "56px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            About Kinderly
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#555",
              lineHeight: "1.7",
              maxWidth: "650px",
            }}
          >
            Kinderly is helping parents discover trusted childcare providers
            while enabling daycare/preschool centers to build visibility, trust, and
            stronger relationships with families.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="/about-hero.jpg"
            alt="About Kinderly"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "auto",
              maxHeight: "450px",
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="responsive-section" style={{ background: "#ffffff", gap: "60px" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="/mission.png"
            alt="Our Mission"
            style={{
              width: "100%",
              maxWidth: "650px",
              height: "auto",
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2
            className="sub-heading"
            style={{
              fontSize: "48px",
              fontWeight: "700",
              marginBottom: "25px",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            Our mission is to simplify childcare discovery through trust,
            transparency, and technology. We help parents make confident
            childcare decisions while empowering daycare/preschool providers to connect
            with more families, improve communication, and grow their
            communities.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding" style={{ background: "#f8f8f8", padding: "80px 60px" }}>
        <h2
          className="sub-heading"
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          The Kinderly Difference
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "22px",
            maxWidth: "800px",
            margin: "0 auto 60px auto",
            lineHeight: "1.7",
          }}
        >
          We're building a platform rooted in trust, transparency, and
          community to make childcare better for everyone.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Card 1 */}
          <div
            className="about-card"
            style={{
              background: "white",
              width: "100%",
              maxWidth: "350px",
              minHeight: "260px",
              padding: "35px",
              borderRadius: "25px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                background: "#F3E8FF",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                margin: "0 auto 30px",
              }}
            >
              <FaShieldAlt color="#7C3AED" size={42} />
            </div>
            <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Trust & Verification
            </h3>
            <p style={{ color: "#555", lineHeight: "1.8", fontSize: "16px" }}>
              Discover verified childcare providers and make informed decisions with confidence.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="about-card"
            style={{
              background: "white",
              width: "100%",
              maxWidth: "350px",
              minHeight: "260px",
              padding: "35px",
              borderRadius: "25px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                background: "#F3E8FF",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                margin: "0 auto 30px",
              }}
            >
              <FaComments color="#7C3AED" size={42} />
            </div>
            <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Communication Made Easy
            </h3>
            <p style={{ color: "#555", lineHeight: "1.8", fontSize: "16px" }}>
              Improve communication between parents and childcare providers through transparency and technology.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="about-card"
            style={{
              background: "white",
              width: "100%",
              maxWidth: "350px",
              minHeight: "260px",
              padding: "35px",
              borderRadius: "25px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                background: "#F3E8FF",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                margin: "0 auto 30px",
              }}
            >
              <FaUsers color="#7C3AED" size={42} />
            </div>
            <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Community Driven
            </h3>
            <p style={{ color: "#555", lineHeight: "1.8", fontSize: "16px" }}>
              Build stronger connections between families and daycare/preschool centers in local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="section-padding" style={{ padding: "80px 60px", background: "#ffffff" }}>
        <h2
          className="sub-heading"
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Who We Serve
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto 45px auto",
            lineHeight: "1.7",
          }}
        >
          We're here for parents and providers—building stronger connections and better childcare experiences for everyone.
        </p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Parents Row-Card */}
          <div className="serve-card">
            <img src="/parents.png" alt="Parents" />
            <div
              style={{
                padding: "30px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  background: "#F3E8FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <FaUsers color="#7C3AED" size={30} />
              </div>
              <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>For Parents</h3>
              <p style={{ color: "#555", lineHeight: "1.7", fontSize: "16px" }}>
                Search, compare, and connect with trusted daycare/preschool centers. Kinderly helps parents make informed choices.
              </p>
            </div>
          </div>

          {/* Providers Row-Card */}
          <div className="serve-card">
            <img src={childcareImg} alt="Daycare Providers" />
            <div
              style={{
                padding: "30px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  background: "#F3E8FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <FaBuilding color="#7C3AED" size={30} />
              </div>
              <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>For Providers</h3>
              <p style={{ color: "#555", lineHeight: "1.7", fontSize: "16px" }}>
                Manage enrollment, communicate with parents, showcase your daycare, and grow your childcare business easily.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="section-padding" style={{ background: "#F3E8FF", padding: "100px 60px", textAlign: "center" }}>
        <h2
          className="sub-heading"
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          Our Vision
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          We envision a future where every parent can confidently find the right childcare solution and every daycare/preschool provider has the tools to grow, connect, and thrive. Kinderly aims to become the most trusted platform for discovering, evaluating, and connecting with childcare providers across communities.
        </p>

        <button
          onClick={() => navigate("/survey")}
          style={{
            marginTop: "40px",
            backgroundColor: "#f58c50",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "16px 40px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(245,140,80,0.25)",
          }}
        >
          Join the Kinderly Journey
        </button>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;