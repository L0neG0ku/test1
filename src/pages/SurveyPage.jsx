import { useState } from "react";
import emailjs from "@emailjs/browser";

function SurveyPage() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [userType, setUserType] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  // Switch questions state to arrays to support multiple selections
  const [q1, setQ1] = useState([]);
  const [q2, setQ2] = useState([]);
  const [q3, setQ3] = useState([]);
  const [q4, setQ4] = useState([]);
  const [q5, setQ5] = useState([]);

  // Helper function to handle multi-select checkbox changes
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
    
    // Check if at least one option is selected per question if Daycare Owner or Parent
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
      .send(
        "service_pe450l4",
        "template_zswwmx9",
        templateParams,
        "taf9C1ZSN7pSkP8Zl"
      )
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
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "54px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Help Shape Kinderly
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            marginBottom: "40px",
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
              transition: "0.4s",
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

            setQ1([]);
            setQ2([]);
            setQ3([]);
            setQ4([]);
            setQ5([]);
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
          <div style={{ marginTop: "50px" }}>
            <h2 className="survey-question">Q1. How do you currently manage attendance and child records? (Select all that apply)</h2>
            
            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q1"
                value="Paper registers only"
                checked={q1.includes("Paper registers only")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}Paper registers only
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q1"
                value="WhatsApp groups with parents"
                checked={q1.includes("WhatsApp groups with parents")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}WhatsApp groups with parents
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q1"
                value="Basic Excel or Google Sheets"
                checked={q1.includes("Basic Excel or Google Sheets")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}Basic Excel or Google Sheets
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q1"
                value="A paid software tool"
                checked={q1.includes("A paid software tool")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}A paid software tool
            </label>

            <br /><br />

            <h2 className="survey-question">Q2. What is your biggest daily operational challenge? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q2"
                value="Tracking which child needs what (medication, allergies, diet)"
                checked={q2.includes("Tracking which child needs what (medication, allergies, diet)")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}Tracking which child needs what (medication, allergies, diet)
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q2"
                value="Collecting fees on time"
                checked={q2.includes("Collecting fees on time")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}Collecting fees on time
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q2"
                value="Communicating updates to parents"
                checked={q2.includes("Communicating updates to parents")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}Communicating updates to parents
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q2"
                value="Managing staff and schedules"
                checked={q2.includes("Managing staff and schedules")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}Managing staff and schedules
            </label>

            <br /><br />

            <h2 className="survey-question">Q3. How do new families find your daycare? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q3"
                value="Word of mouth and referrals only"
                checked={q3.includes("Word of mouth and referrals only")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}Word of mouth and referrals only
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q3"
                value="Social media (Facebook/Instagram)"
                checked={q3.includes("Social media (Facebook/Instagram)")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}Social media (Facebook/Instagram)
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q3"
                value="JustDial or similar directories"
                checked={q3.includes("JustDial or similar directories")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}JustDial or similar directories
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q3"
                value="We struggle to get new families"
                checked={q3.includes("We struggle to get new families")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}We struggle to get new families
            </label>

            <br /><br />

            <h2 className="survey-question">Q4. What would make you switch to or try a new platform? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q4"
                value="It brings me new families directly"
                checked={q4.includes("It brings me new families directly")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}It brings me new families directly
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q4"
                value="It replaces my paperwork completely"
                checked={q4.includes("It replaces my paperwork completely")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}It replaces my paperwork completely
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q4"
                value="It is free to start with no long commitment"
                checked={q4.includes("It is free to start with no long commitment")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}It is free to start with no long commitment
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q4"
                value="It works on my phone without a computer"
                checked={q4.includes("It works on my phone without a computer")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}It works on my phone without a computer
            </label>

            <br /><br />

            <h2 className="survey-question">
              Q5. Would you be interested in being a part of KINDERLY in which
              you get verified mothers looking for verified and transparent
              daycares/play schools around them? (Select all that apply)
            </h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q5"
                value="Yes, definitely interested"
                checked={q5.includes("Yes, definitely interested")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}Yes, definitely interested
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q5"
                value="Maybe, tell me more"
                checked={q5.includes("Maybe, tell me more")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}Maybe, tell me more
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q5"
                value="No, happy with current setup"
                checked={q5.includes("No, happy with current setup")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}No, happy with current setup
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="q5"
                value="No, already using a software"
                checked={q5.includes("No, already using a software")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}No, already using a software
            </label>
          </div>
        )}

        {showSurvey && userType === "Parent" && (
          <div style={{ marginTop: "50px" }}>
            <h2 className="survey-question">Q1. How did you find your current daycare / play school? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq1"
                value="Word of mouth from friends or family"
                checked={q1.includes("Word of mouth from friends or family")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}Word of mouth from friends or family
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq1"
                value="Searched on Google"
                checked={q1.includes("Searched on Google")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}Searched on Google
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq1"
                value="Facebook or WhatsApp groups"
                checked={q1.includes("Facebook or WhatsApp groups")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}Facebook or WhatsApp groups
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq1"
                value="I am still looking for a good one"
                checked={q1.includes("I am still looking for a good one")}
                onChange={(e) => handleCheckboxChange(e.target.value, q1, setQ1)}
              />
              {" "}I am still looking for a good one
            </label>
            
            <br /><br />

            <h2 className="survey-question">Q2. What is your biggest worry when choosing a play school / daycare? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq2"
                value="Safety and staff background checks"
                checked={q2.includes("Safety and staff background checks")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}Safety and staff background checks
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq2"
                value="No way to verify if it is trustworthy"
                checked={q2.includes("No way to verify if it is trustworthy")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}No way to verify if it is trustworthy
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq2"
                value="My child’s allergies or medication won’t be communicated properly"
                checked={q2.includes("My child’s allergies or medication won’t be communicated properly")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}My child’s allergies or medication won’t be communicated properly
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq2"
                value="I don’t know what goes on inside during the day"
                checked={q2.includes("I don’t know what goes on inside during the day")}
                onChange={(e) => handleCheckboxChange(e.target.value, q2, setQ2)}
              />
              {" "}I don’t know what goes on inside during the day
            </label>

            <br /><br />

            <h2 className="survey-question">Q3. How do you currently share your child’s medical or dietary needs with the daycare? (Select all that apply)</h2>
              
            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq3"
                value="Tell them verbally and hope they remember"
                checked={q3.includes("Tell them verbally and hope they remember")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}Tell them verbally and hope they remember
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq3"
                value="Write it on paper every time"
                checked={q3.includes("Write it on paper every time")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}Write it on paper every time
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq3"
                value="Send a WhatsApp message"
                checked={q3.includes("Send a WhatsApp message")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}Send a WhatsApp message
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq3"
                value="There is no proper system, it worries me"
                checked={q3.includes("There is no proper system, it worries me")}
                onChange={(e) => handleCheckboxChange(e.target.value, q3, setQ3)}
              />
              {" "}There is no proper system, it worries me
            </label>

            <br /><br />

            <h2 className="survey-question">Q4. What would make you feel confident sending your child to a daycare? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq4"
                value="A verified inspection from a trusted platform"
                checked={q4.includes("A verified inspection from a trusted platform")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}A verified inspection from a trusted platform
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq4"
                value="Live CCTV access from my phone"
                checked={q4.includes("Live CCTV access from my phone")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}Live CCTV access from my phone
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq4"
                value="A digital profile where my child’s needs are always on record"
                checked={q4.includes("A digital profile where my child’s needs are always on record")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}A digital profile where my child’s needs are always on record
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq4"
                value="Parent reviews and ratings I can trust"
                checked={q4.includes("Parent reviews and ratings I can trust")}
                onChange={(e) => handleCheckboxChange(e.target.value, q4, setQ4)}
              />
              {" "}Parent reviews and ratings I can trust
            </label>

            <br /><br />

            <h2 className="survey-question">Q5. Would you use a free app to find verified, inspected daycares and play schools near you? (Select all that apply)</h2>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq5"
                value="Yes, I would download it right now"
                checked={q5.includes("Yes, I would download it right now")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}Yes, I would download it right now
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq5"
                value="Yes but only if play schools/daycares near me are listed"
                checked={q5.includes("Yes but only if play schools/daycares near me are listed")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}Yes but only if play schools/daycares near me are listed
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq5"
                value="Maybe, depends on how many options are available"
                checked={q5.includes("Maybe, depends on how many options are available")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}Maybe, depends on how many options are available
            </label>

            <label className="survey-option" style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="checkbox"
                name="pq5"
                value="No, I already have a play school/daycare I trust"
                checked={q5.includes("No, I already have a play school/daycare I trust")}
                onChange={(e) => handleCheckboxChange(e.target.value, q5, setQ5)}
              />
              {" "}No, I already have a play school/daycare I trust
            </label>
          </div>
        )}

        {showSurvey && (
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <button
              style={buttonStyle}
              onClick={sendEmail}
            >
              Submit Survey
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "20px",
  marginBottom: "24px",
  borderRadius: "16px",
  border: "1px solid #ddd",
  fontSize: "17px",
  boxSizing: "border-box",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  background: "linear-gradient(135deg, #8b5cf6, #7c4dff)",
  color: "white",
  border: "none",
  borderRadius: "999px",
  fontSize: "18px",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(124,77,255,0.25)",
  transition: "0.3s ease",
};

export default SurveyPage;