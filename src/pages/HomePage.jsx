import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUsers, FaBuilding, FaComments } from "react-icons/fa";
import parentImg from "../assets/parent.jpeg";
import daycareImg from "../assets/daycare.jpeg";


function HomePage() {
  return (
    <>
    
      <section
        style={{
          backgroundColor: "#F3E8FF",
          padding: "80px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <div style={{ flex: 1, textAlign: "center" }}>
          <div
            style={{
              height: "250px",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
              marginBottom: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
             <img
               className="hero-image"
               src={parentImg}
               alt="Parents"
               style={{
               width: "100%",
               height: "280px",
               objectFit: "cover",
               borderRadius: "30px",
               boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
               }}
             />
          </div>

          <h1
            style={{
              fontSize: "35px",
              fontWeight: "700",
              marginTop: "45px",
              marginBottom: "15px",
              lineHeight: "1.2",
            }}
          >
            Find Your Ideal Daycare/Preschool
          </h1>

         <p
           style={{
             fontSize: "22px",
             color: "#555",
             lineHeight: "1.6",
             marginBottom: "35px",
          }}
         >
          Simplify the search for your child's early education.
         </p>

          <button
            style={{
              backgroundColor: "#8B5CF6",
              color: "white",
              border: "none",
              borderRadius: "40px",
              padding: "16px 36px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
              display: "inline-block",
              marginTop: "5px",
            }}
          >
           Get Early Access
          </button>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <div
            style={{
              height: "250px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
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
                height: "280px",
                objectFit: "cover",
                borderRadius: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
               }}
             />
          </div>

          <h1
            style={{
              fontSize: "35px",
              fontWeight: "700",
              marginTop: "45px",
              marginBottom: "15px",
              lineHeight: "1.2",
             }}
           >
           Elevate Your Daycare/Preschool Operations
         </h1>

          <p
             style={{
               fontSize: "22px",
               color: "#555",
               lineHeight: "1.6",
               marginBottom: "35px",
               maxWidth: "650px",
               marginLeft: "auto",
               marginRight: "auto",
             }}
           >
           Optimize management, communication and growth.
         </p>

          <button
            style={{
              backgroundColor: "#8B5CF6",
              color: "white",
              border: "none",
              borderRadius: "40px",
              padding: "16px 36px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
              display: "inline-block",
              marginTop: "5px",
            }}
           >
            Schedule Call
          </button>
        </div>
      </section>

      <section
         style={{
           backgroundColor: "#f8f8f8",
           padding: "35px 60px 40px",
        }}
      >
      <div
         style={{
           display: "flex",
           justifyContent: "center",
           gap: "30px",
           flexWrap: "wrap",
        }}
      >
    {/* Card 1 */}
    <div className="card">
      <h2
        style={{      
         fontSize: "42px",
         marginBottom: "15px",
        }}
      >
      <FaUsers size={55} color="#F58C50" />
     </h2>
      <h3
         style={{
           fontSize: "28px",
           fontWeight: "700",
           marginBottom: "10px",
           color: "#222",
        }}
       >
       For Parents
      </h3>

      <p
        style={{
          fontSize: "17px",
          color: "#666",
          lineHeight: "1.6",
          maxWidth: "280px",
          margin: "0 auto",
        }}
       >
         Discover verified daycares/preschools, compare trusted reviews, and find the perfect environment for your child.
      </p>
    </div>

    {/* Card 2 */}
    <div className="card">
      <h2
        style={{
         fontSize: "42px",
         marginBottom: "15px",
       }}
      >
      <FaBuilding size={55} color="#F58C50" />
     </h2>
      <h3
       style={{
         fontSize: "28px",
         fontWeight: "700",
         marginBottom: "10px",
         color: "#222",
       }}
      >
       For Daycare/Preschool Providers
      </h3>

      <p
        style={{
          fontSize: "17px",
          color: "#666",
          lineHeight: "1.6",
          maxWidth: "280px",
          margin: "0 auto",
        }}
       >
         Streamline operations, improve parent communication, and grow your enrollment with confidence.
      </p>
    </div>

    {/* Card 3 */}
    <div className="card survey-card">
      <h2
        style={{
         fontSize: "42px",
         marginBottom: "15px",
       }}
      >
      <FaComments size={55} color="#F58C50" />
     </h2>

      <h3
         style={{
           fontSize: "28px",
           fontWeight: "700",
           marginBottom: "10px",
           color: "#222",
         }}
      >
        Shape KINDERLY
     </h3>

      <p
        style={{
          fontSize: "17px",
          color: "#666",
          lineHeight: "1.6",
          maxWidth: "280px",
          margin: "0 auto",
        }}
       >
         Help us build a smarter childcare platform designed for both parents and daycare/ preschool providers.
      </p>

     <Link to="/survey" style={{ textDecoration: "none" }}>
      <button
         style={{
           backgroundColor: "#7c4dff",
           color: "white",
           border: "none",
           borderRadius: "40px",
           padding: "16px 40px",
           fontSize: "18px",
           fontWeight: "600",
           cursor: "pointer",
           marginTop: "30px",
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