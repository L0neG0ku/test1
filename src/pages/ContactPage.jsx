import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
     
          <div
              style={{
                  background: "#F3E8FF",
                  padding: "70px 60px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "60px",
              }}
          >



              <div style={{ flex: 1 }}>

                  <span
                      style={{
                          background: "#fff",
                          color: "#8B5CF6",
                          padding: "10px 22px",
                          borderRadius: "30px",
                          fontWeight: "600",
                      }}
                  >
                      GET IN TOUCH
                  </span>

                  <h1
                      style={{
                          fontSize: "56px",
                          marginTop: "30px",
                          marginBottom: "20px",
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
                      Whether you're a parent looking for trusted childcare
                      or a daycare provider interested in joining Kinderly,
                      we're here to help every step of the way.
                  </p>

                  <div
                      style={{
                          marginTop: "45px",
                          background: "#FFF7EA",
                          borderRadius: "22px",
                          padding: "22px",
                          display: "flex",
                          alignItems: "center",
                          gap: "18px",
                          width: "520px",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
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
                          }}
                      >
                          <FaEnvelope />
                      </div>

                      <div>
                          <h4
                              style={{
                                  margin: 0,
                                  fontSize: "24px",
                              }}
                          >
                              We typically respond within 24 hours
                          </h4>

                          <p
                              style={{
                                  marginTop: "10px",
                                  color: "#666",
                                  lineHeight: "1.6",
                              }}
                          >
                              Thank you for being a part of the Kinderly community! 💜
                          </p>
                      </div>
                  </div>

              </div>



              <div style={{ flex: 1 }}>

                  <img
                      src="/contact-img.png"
                      alt="Contact Kinderly"
                      style={{
                          width: "100%",
                          borderRadius: "30px",
                          objectFit: "cover",
                      }}
                  />

              </div>

          </div>

          <div
              style={{
                  background: "#ffffff",
                  padding: "80px 60px",
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
                  Have questions or want to learn more about Kinderly?
                  We're always happy to connect.
              </p>

              <div
                  style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "30px",
                      flexWrap: "wrap",
                  }}
              >



                  <div
                      className="about-card"
                      style={{
                          width: "360px",
                          background: "#fff",
                          borderRadius: "25px",
                          padding: "50px 40px",
                          textAlign: "center",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
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
            

                      <h3
                          style={{
                              fontSize: "34px",
                              marginBottom: "15px",
                          }}
                      >
                          Email Us
                      </h3>

                      <p
                          style={{
                              color: "#7C3AED",
                              fontWeight: "600",
                              marginBottom: "15px",
                              fontSize: "18px",
                          }}
                      >
                          Kinderlyconnect@gmail.com
                      </p>


                      <p style={{ color: "#666" }}>
                          We're always happy to help.
                      </p>
                  </div>



                  <div
                      className="about-card"
                      style={{
                          width: "360px",
                          background: "#fff",
                          borderRadius: "25px",
                          padding: "50px 40px",
                          textAlign: "center",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                  >
                      <div
                          className="about-card"
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

                      <h3
                          style={{
                              fontSize: "34px",
                              marginBottom: "15px",
                          }}
                      >
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

                      <p style={{ color: "#666" }}>
                          Proudly building for families across the country.
                      </p>
                  </div>

                  <div
                      className="about-card"
                      style={{
                          width: "360px",
                          background: "#fff",
                          borderRadius: "25px",
                          padding: "50px 40px",
                          textAlign: "center",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
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

                      <h3
                          style={{
                              fontSize: "34px",
                              marginBottom: "15px",
                          }}
                      >
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

                      <p style={{ color: "#666" }}>
                          9:00 AM - 6:00 PM IST
                      </p>
                  </div>

              </div>
          </div>
          <div
              style={{
                  background: "#F3E8FF",
                  maxWidth: "1450px",
                  margin: "80px auto",
                  borderRadius: "35px",
                  padding: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "60px",
              }}
          >

              <div
                  style={{
                      fontSize: "80px",
                      color: "#8B5CF6",
                      flex: "0.4",
                      textAlign: "center",
                      position: "relative",
                  }}
              >
                  <FaPaperPlane />

                 

              </div>

            

              <div
                  style={{
                      flex: 1,
                      textAlign: "center",
                  }}
              >
                  <h2
                      style={{
                          fontSize: "52px",
                          marginBottom: "20px",
                      }}
                  >
                      Your Feedback Shapes Kinderly
                  </h2>

                  <p
                      style={{
                          color: "#555",
                          fontSize: "22px",
                          lineHeight: "1.8",
                          maxWidth: "650px",
                          margin: "0 auto",
                      }}
                  >
                      Your opinions and suggestions help us create a better childcare
                      experience for everyone.
                  </p>

                  <button
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
                  style={{
                      flex: "0.4",
                      textAlign: "center",
                  }}
              >
                 
                  <FaHeart
                      size={65}
                      color="#A855F7"
                      style={{
                          marginTop: "12px",
                      }}
                  />
              </div>
          </div>
      <Footer />
    </>
  );
}

export default ContactPage;