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
        <div
            style={{
                background: "#F3E8FF",
                padding: "60px 60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "50px",
            }}
        >
            <div style={{ flex: 1 }}>
                <h1
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

            <div style={{ flex: 1 }}>
                <img
                    src="/about-hero.jpg"
                    alt="About Kinderly"
                    style={{
                        width: "100%",
                        maxWidth: "700px",
                        height: "450px",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "60px",
            }}
        >
            <div style={{ flex: 1 }}>
                <img
                    src="/mission.png"
                    alt="Our Mission"
                    style={{
                        width: "100%",
                        maxWidth: "650px",
                        borderRadius: "30px",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div style={{ flex: 1 }}>
                <h2
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


        <div
            style={{
                background: "#f8f8f8",
                padding: "80px 60px",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "42px",
                    marginBottom: "60px",
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
                    margin: "20px auto 60px auto",
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
                <div
                    className="about-card"
                    style={{
                          background: "white",
                          width: "350px",
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

                    <h3
                        style={{
                            fontSize: "32px",
                            marginBottom: "20px",
                        }}
                    >
                        Trust & Verification
                    </h3>

                    <p
                        style={{
                            color: "#555",
                            lineHeight: "1.8",
                            fontSize: "18px",
                        }}
                    >
                        Discover verified childcare providers and make informed decisions
                        with confidence.
                    </p>
                </div>

                <div
                    className="about-card"
                    style={{
                         background: "white",
                         width: "350px",
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

                    <h3
                        style={{
                            fontSize: "32px",
                            marginBottom: "20px",
                        }}
                    >
                        Communication Made Easy
                    </h3>

                    <p
                        style={{
                            color: "#555",
                            lineHeight: "1.8",
                            fontSize: "18px",
                        }}
                    >
                        Improve communication between parents and childcare providers
                        through transparency and technology.
                    </p>
                </div>

                <div
                    className="about-card"
                    style={{
                          background: "white",
                          width: "350px",
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

                    <h3
                        style={{
                            fontSize: "32px",
                            marginBottom: "20px",
                        }}
                    >
                        Community Driven
                    </h3>

                    <p
                        style={{
                            color: "#555",
                            lineHeight: "1.8",
                            fontSize: "18px",
                        }}
                    >
                        Build stronger connections between families and daycare/ preschool centers
                        in local communities.
                    </p>
                </div>
            </div>
        </div>

        <div
            style={{
                padding: "50px 60px",
                background: "#ffffff",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "42px",
                    marginBottom: "60px",
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
                    margin: "-35px auto 45px",
                    lineHeight: "1.7",
                }}
            >
                We're here for parents and providers—building stronger
                connections and better childcare experiences for everyone.
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <div
                    className="about-card"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        width: "680px",
                        height: "330px",
                        background: "#F8F4FF",
                        borderRadius: "28px",
                        overflow: "hidden",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        transition: "0.3s ease",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src="/parents.png"
                        alt="Parents"
                        style={{
                            width: "45%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />

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

                        <h3
                            style={{
                                fontSize: "34px",
                                marginBottom: "18px",
                            }}
                        >
                            For Parents
                        </h3>

                        <p
                            style={{
                                color: "#555",
                                lineHeight: "1.8",
                                fontSize: "18px",
                            }}
                        >
                            Search, compare, and connect with trusted daycare/preschool centers
                            and play schools. Kinderly helps parents make informed
                            childcare decisions with confidence.
                        </p>

                    </div>
                </div>

                <div
  className="about-card"
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    width: "680px",
    height: "330px",
    background: "#F8F4FF",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
    cursor: "pointer",
  }}
>
  <img
    src={childcareImg} 
    alt="Daycare Providers"
    style={{
      width: "45%",
      height: "100%",
      objectFit: "cover",
    }}
  />

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

    <h3
      style={{
        fontSize: "34px",
        marginBottom: "18px",
      }}
    >
      For Daycare Providers
    </h3>

    <p
      style={{
        color: "#555",
        lineHeight: "1.8",
        fontSize: "18px",
      }}
    >
      Manage enrollment, communicate with parents, showcase your daycare,
      and grow your childcare business with Kinderly's all-in-one platform.
    </p>F
  </div>
</div>

                
            </div>
        </div>

        <div
            style={{
                background: "#F3E8FF",
                padding: "100px 60px",
                textAlign: "center",
            }}
        >
            <h2
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
                We envision a future where every parent can confidently find the
                right childcare solution and every daycare/preschool provider has the tools
                to grow, connect, and thrive. Kinderly aims to become the most
                trusted platform for discovering, evaluating, and connecting with
                childcare providers across communities.
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