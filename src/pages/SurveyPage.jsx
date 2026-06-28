import { useState } from "react";
import emailjs from "@emailjs/browser";

function SurveyPage() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [userType, setUserType] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const [q1, setQ1] = useState([]);
  const [q2, setQ2] = useState([]);
  const [q3, setQ3] = useState([]);
  const [q4, setQ4] = useState([]);
  const [q5, setQ5] = useState([]);

  const handleCheckboxChange = (value, currentArray, setArray) => {
    if (currentArray.includes(value)) {
      setArray(currentArray.filter((item) => item !== value));
    } else {
      setArray([...currentArray, value]);
    }
  };

  const sendEmail = () => {
    if (!name || !email || !city || !userType) {
      alert("Please fill all fields before submitting.");
      return;
    }
    
    if (
      (userType === "Daycare Owner" || userType === "Parent") &&
      (q1.length === 0 || q2.length === 0 || q3.length === 0 || q4.length === 0 || q5.length === 0)
    ) {
      alert("Please answer all survey questions with at least one option.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      city: city,
      userType: userType,
      message: `
      Q1: ${q1.join(", ")}
      Q2: ${q2.join(", ")}
      Q3: ${q3.join(", ")}
      Q4: ${q4.join(", ")}
      Q5: ${q5.join(", ")}
      `,
    };

    emailjs
      .send("service_pe450l4", "template_zswwmx9", templateParams, "taf9C1ZSN7pSkP8Zl")
      .then(() => {
        alert("Thank you for helping shape Kinderly!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit survey.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4ecff 0%, #ede4ff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px 12px", // Decreased padding for tight screens
      }}
    >
      {/* Injecting dynamic media queries directly into the page */}
      <style>{`
        .survey-container {
          padding: 50px;
        }
        .main-title {
          font-size: 48px;
        }
        .survey-question {
          font-size: 22px;
          margin-bottom: 15px;
          line-height: 1.4;
        }
        .survey-option {
          font-size: 16px;
        }
        @media (max-width: 600px) {
          .survey-container {
            padding: 24px 16px !important;
            border-radius: 20px !important;
          }
          .main-title {
            font-size: 28px !important;
          }
          .survey-question {
            font-size: 18px !important;
          }
          .survey-option {
            font-size: 15px !important;
          }
        }
      `}</style>

      <div
        className="survey-container"
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          boxSizing: "border-box",
        }}
      >
        <h1
          className="main-title"
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "10px",
            color: "#1a1a1a",
          }}
        >
          Help Shape Kinderly
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "30px",
          }}
        >
          Help us build a smarter childcare platform for parents and daycare providers.
        </p>

        <div
          style={{
            height: "8px",
            background: "#eee",
            borderRadius: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: showSurvey ? "100%" : "20%",
              height: "100%",
              background: "#7c4dff",
              borderRadius: "20px",
              transition: "0.4s ease-in-out",
            }}
          />
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={inputStyle}
        />

        <select
          value={userType}
          onChange={(e) => {
            setUserType(e.target.value);
            setShowSurvey(false);
            setQ1([]); setQ2([]); setQ3([]); setQ4([]); setQ5([]);
          }}
          style={inputStyle}
        >
          <option value="">I am a</option>
          <option value="Parent">Parent</option>
          <option value="Daycare Owner">Daycare Owner</option>
        </select>

        <button
          onClick={() => setShowSurvey(true)}
          style={buttonStyle}
        >
          Start Survey
        </button>

        {showSurvey && userType === "Daycare Owner" && (
          <div style={{ marginTop: "40px" }}>
            <h2 className="survey-question">Q1. How do you currently manage attendance and child records? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Paper registers only" checked={q1.includes("Paper registers only")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              Paper registers only
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="WhatsApp groups with parents" checked={q1.includes("WhatsApp groups with parents")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              WhatsApp groups with parents
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Basic Excel or Google Sheets" checked={q1.includes("Basic Excel or Google Sheets")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              Basic Excel or Google Sheets
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="A paid software tool" checked={q1.includes("A paid software tool")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              A paid software tool
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q2. What is your biggest daily operational challenge? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Tracking which child needs what (medication, allergies, diet)" checked={q2.includes("Tracking which child needs what (medication, allergies, diet)")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              Tracking which child needs what (medication, allergies, diet)
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Collecting fees on time" checked={q2.includes("Collecting fees on time")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              Collecting fees on time
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Communicating updates to parents" checked={q2.includes("Communicating updates to parents")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              Communicating updates to parents
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Managing staff and schedules" checked={q2.includes("Managing staff and schedules")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              Managing staff and schedules
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q3. How do new families find your daycare? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Word of mouth and referrals only" checked={q3.includes("Word of mouth and referrals only")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              Word of mouth and referrals only
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Social media (Facebook/Instagram)" checked={q3.includes("Social media (Facebook/Instagram)")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              Social media (Facebook/Instagram)
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="JustDial or similar directories" checked={q3.includes("JustDial or similar directories")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              JustDial or similar directories
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="We struggle to get new families" checked={q3.includes("We struggle to get new families")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              We struggle to get new families
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q4. What would make you switch to or try a new platform? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="It brings me new families directly" checked={q4.includes("It brings me new families directly")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              It brings me new families directly
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="It replaces my paperwork completely" checked={q4.includes("It replaces my paperwork completely")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              It replaces my paperwork completely
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="It is free to start with no long commitment" checked={q4.includes("It is free to start with no long commitment")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              It is free to start with no long commitment
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="It works on my phone without a computer" checked={q4.includes("It works on my phone without a computer")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              It works on my phone without a computer
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q5. Would you be interested in being a part of KINDERLY? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Yes, definitely interested" checked={q5.includes("Yes, definitely interested")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              Yes, definitely interested
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Maybe, tell me more" checked={q5.includes("Maybe, tell me more")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              Maybe, tell me more
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="No, happy with current setup" checked={q5.includes("No, happy with current setup")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              No, happy with current setup
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="No, already using a software" checked={q5.includes("No, already using a software")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              No, already using a software
            </label>
          </div>
        )}

        {showSurvey && userType === "Parent" && (
          <div style={{ marginTop: "40px" }}>
            <h2 className="survey-question">Q1. How did you find your current daycare / play school? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Word of mouth from friends or family" checked={q1.includes("Word of mouth from friends or family")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              Word of mouth from friends or family
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Searched on Google" checked={q1.includes("Searched on Google")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              Searched on Google
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Facebook or WhatsApp groups" checked={q1.includes("Facebook or WhatsApp groups")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              Facebook or WhatsApp groups
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="I am still looking for a good one" checked={q1.includes("I am still looking for a good one")} onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)} style={checkboxStyle} />
              I am still looking for a good one
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q2. What is your biggest worry when choosing a play school / daycare? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Safety and staff background checks" checked={q2.includes("Safety and staff background checks")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              Safety and staff background checks
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="No way to verify if it is trustworthy" checked={q2.includes("No way to verify if it is trustworthy")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              No way to verify if it is trustworthy
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="My child’s allergies or medication won’t be communicated properly" checked={q2.includes("My child’s allergies or medication won’t be communicated properly")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              My child’s allergies or medication won’t be communicated properly
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="I don’t know what goes on inside during the day" checked={q2.includes("I don’t know what goes on inside during the day")} onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)} style={checkboxStyle} />
              I don’t know what goes on inside during the day
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q3. How do you currently share your child’s medical or dietary needs? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Tell them verbally and hope they remember" checked={q3.includes("Tell them verbally and hope they remember")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              Tell them verbally and hope they remember
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Write it on paper every time" checked={q3.includes("Write it on paper every time")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              Write it on paper every time
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Send a WhatsApp message" checked={q3.includes("Send a WhatsApp message")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              Send a WhatsApp message
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="There is no proper system, it worries me" checked={q3.includes("There is no proper system, it worries me")} onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)} style={checkboxStyle} />
              There is no proper system, it worries me
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q4. What would make you feel confident sending your child to a daycare? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="A verified inspection from a trusted platform" checked={q4.includes("A verified inspection from a trusted platform")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              A verified inspection from a trusted platform
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Live CCTV access from my phone" checked={q4.includes("Live CCTV access from my phone")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              Live CCTV access from my phone
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="A digital profile where my child’s needs are always on record" checked={q4.includes("A digital profile where my child’s needs are always on record")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              A digital profile where my child’s needs are always on record
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Parent reviews and ratings I can trust" checked={q4.includes("Parent reviews and ratings I can trust")} onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)} style={checkboxStyle} />
              Parent reviews and ratings I can trust
            </label>

            <h2 className="survey-question" style={{ marginTop: "30px" }}>Q5. Would you use a free app to find verified play schools near you? (Select all that apply)</h2>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Yes, I would download it right now" checked={q5.includes("Yes, I would download it right now")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              Yes, I would download it right now
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Yes but only if play schools/daycares near me are listed" checked={q5.includes("Yes but only if play schools/daycares near me are listed")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              Yes but only if play schools/daycares near me are listed
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="Maybe, depends on how many options are available" checked={q5.includes("Maybe, depends on how many options are available")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              Maybe, depends on how many options are available
            </label>
            <label className="survey-option" style={checkboxLabelStyle}>
              <input type="checkbox" value="No, I already have a play school/daycare I trust" checked={q5.includes("No, I already have a play school/daycare I trust")} onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)} style={checkboxStyle} />
              No, I already have a play school/daycare I trust
            </label>
          </div>
        )}

        {showSurvey && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button style={buttonStyle} onClick={sendEmail}>
              Submit Survey
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Fixed spacing styles for improved mobile ergonomics
const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(135deg, #8b5cf6, #7c4dff)",
  color: "white",
  border: "none",
  borderRadius: "999px",
  fontSize: "17px",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 6px 16px rgba(124,77,255,0.2)",
};

const checkboxLabelStyle = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "12px",
  cursor: "pointer",
  lineHeight: "1.4",
};

const checkboxStyle = {
  marginRight: "10px",
  marginTop: "4px",
  transform: "scale(1.1)",
};

export default SurveyPage;