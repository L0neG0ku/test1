import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                      style={{
                          width: "340px",
                          background: "#fff",
                          borderRadius: "25px",
                          padding: "40px",
                          textAlign: "center",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                  >
                      <div style={{ fontSize: "45px" }}>📧</div>

                      <h3>Email Us</h3>

                      <p>Kinderlyconnect@gmail.com</p>

                      <p style={{ color: "#666" }}>
                          We're always happy to help.
                      </p>
                  </div>



                  <div
                      style={{
                          width: "340px",
                          background: "#fff",
                          borderRadius: "25px",
                          padding: "40px",
                          textAlign: "center",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                  >
                      <div style={{ fontSize: "45px" }}>📍</div>

                      <h3>Our Location</h3>

                      <p>India</p>

                      <p style={{ color: "#666" }}>
                          Proudly building for families across the country.
                      </p>
                  </div>

                  {/* Hours */}

                  <div
                      style={{
                          width: "340px",
                          background: "#fff",
                          borderRadius: "25px",
                          padding: "40px",
                          textAlign: "center",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                  >
                      <div style={{ fontSize: "45px" }}>🕒</div>

                      <h3>Office Hours</h3>

                      <p>Monday - Friday</p>

                      <p style={{ color: "#666" }}>
                          9:00 AM - 6:00 PM IST
                      </p>
                  </div>

              </div>
          </div>

      <Footer />
    </>
  );
}

export default ContactPage;