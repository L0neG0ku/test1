import { useState } from "react";
import emailjs from "@emailjs/browser";

function SurveyPage() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [userType, setUserType] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");

  const sendEmail = () => {
    if (!name || !email || !city || !userType) {
      alert("Please fill all fields before submitting.");
      return;
    }
    if (
      userType === "Daycare Owner" &&
      (!q1 || !q2 || !q3 || !q4 || !q5)
    ) {
      alert("Please answer all survey questions.");
      return;
    }
  const templateParams = {
    name: name,
    email: email,
    city: city,
    userType: userType,
    message: `
    Q1: ${q1}

    Q2: ${q2}

    Q3: ${q3}

    Q4: ${q4}

    Q5: ${q5}
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

            setQ1("");
            setQ2("");
            setQ3("");
            setQ4("");
            setQ5("");
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
            <h2 className="survey-question">Q1. How do you currently manage attendance and child records?</h2>
             
             <label className="survey-option">
               <input
                  type="radio"
                  name="q1"
                  value="Paper registers only"
                  checked={q1 === "Paper registers only"}
                  onChange={(e) => setQ1(e.target.value)}
               />
                Paper registers only
             </label>

             <label className="survey-option">
              <input
                 type="radio"
                 name="q1"
                 value="WhatsApp groups with parents"
                 checked={q1 === "WhatsApp groups with parents"}
                 onChange={(e) => setQ1(e.target.value)}
             />
              WhatsApp groups with parents
             </label>

             <label className="survey-option">
              <input
                type="radio"
                name="q1"
                value="Basic Excel or Google Sheets"
                checked={q1 === "Basic Excel or Google Sheets"}
                onChange={(e) => setQ1(e.target.value)}
              />
               Basic Excel or Google Sheets
             </label>

             <label className="survey-option">
              <input
                type="radio"
                name="q1"
                value="A paid software tool"
                checked={q1 === "A paid software tool"}
                onChange={(e) => setQ1(e.target.value)}
             />
              A paid software tool
            </label>

            <br /><br /><br />

            <h2 className="survey-question">Q2. What is your biggest daily operational challenge?</h2>

              <label className="survey-option">
                <input
                  type="radio"
                  name="q2"
                  value="Tracking which child needs what (medication, allergies, diet)"
                  checked={q2 === "Tracking which child needs what (medication, allergies, diet)"}
                  onChange={(e) => setQ2(e.target.value)}
                />
                Tracking which child needs what (medication, allergies, diet)
              </label>

             <label className="survey-option">
               <input
                 type="radio"
                 name="q2"
                 value="Collecting fees on time"
                 checked={q2 === "Collecting fees on time"}
                 onChange={(e) => setQ2(e.target.value)}
               />
                 Collecting fees on time
               </label>

             <label className="survey-option">
               <input
                  type="radio"
                  name="q2"
                  value="Communicating updates to parents"
                  checked={q2 === "Communicating updates to parents"}
                  onChange={(e) => setQ2(e.target.value)}
                />
                 Communicating updates to parents
               </label>

             <label className="survey-option">
               <input
                  type="radio"
                  name="q2"
                  value="Managing staff and schedules"
                  checked={q2 === "Managing staff and schedules"}
                  onChange={(e) => setQ2(e.target.value)}
                />
                 Managing staff and schedules
               </label>
            <br /><br /><br />

            <h2 className="survey-question">Q3. How do new families find your daycare?</h2>

              
                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q3"
                              value="Word of mouth and referrals only"
                              checked={q3 === "Word of mouth and referrals only"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          Word of mouth and referrals only
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q3"
                              value="Social media (Facebook/Instagram)"
                              checked={q3 === "Social media (Facebook/Instagram)"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          Social media (Facebook/Instagram)
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q3"
                              value="JustDial or similar directories"
                              checked={q3 === "JustDial or similar directories"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          JustDial or similar directories
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q3"
                              value="We struggle to get new families"
                              checked={q3 === "We struggle to get new families"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          We struggle to get new families
                      </label>

            <br /><br /><br />

            <h2 className="survey-question">Q4. What would make you switch to or try a new platform?</h2>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q4"
                              value="It brings me new families directly"
                              checked={q4 === "It brings me new families directly"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          It brings me new families directly
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q4"
                              value="It replaces my paperwork completely"
                              checked={q4 === "It replaces my paperwork completely"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          It replaces my paperwork completely
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q4"
                              value="It is free to start with no long commitment"
                              checked={q4 === "It is free to start with no long commitment"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          It is free to start with no long commitment
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q4"
                              value="It works on my phone without a computer"
                              checked={q4 === "It works on my phone without a computer"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          It works on my phone without a computer
                      </label>

            <br /><br /><br />

            <h2 className="survey-question">
              Q5. Would you be interested in being a part of KINDERLY in which
              you get verified mothers looking for verified and transparent
              daycares/play schools around them?
            </h2>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q5"
                              value="Yes, definitely interested"
                              checked={q5 === "Yes, definitely interested"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          Yes, definitely interested
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q5"
                              value="Maybe, tell me more"
                              checked={q5 === "Maybe, tell me more"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          Maybe, tell me more
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q5"
                              value="No, happy with current setup"
                              checked={q5 === "No, happy with current setup"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          No, happy with current setup
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="q5"
                              value="No, already using a software"
                              checked={q5 === "No, already using a software"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          No, already using a software
                      </label>

          </div>
        )}

        {showSurvey && userType === "Parent" && (
          <div style={{ marginTop: "50px" }}>
            <h2 className="survey-question">Q1. How did you find your current daycare / play school?</h2>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq1"
                              value="Word of mouth from friends or family"
                              checked={q1 === "Word of mouth from friends or family"}
                              onChange={(e) => setQ1(e.target.value)}
                          />
                          Word of mouth from friends or family
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq1"
                              value="Searched on Google"
                              checked={q1 === "Searched on Google"}
                              onChange={(e) => setQ1(e.target.value)}
                          />
                          Searched on Google
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq1"
                              value="Facebook or WhatsApp groups"
                              checked={q1 === "Facebook or WhatsApp groups"}
                              onChange={(e) => setQ1(e.target.value)}
                          />
                          Facebook or WhatsApp groups
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq1"
                              value="I am still looking for a good one"
                              checked={q1 === "I am still looking for a good one"}
                              onChange={(e) => setQ1(e.target.value)}
                          />
                          I am still looking for a good one
                      </label>
            <br /><br /><br />

            <h2 className="survey-question">Q2. What is your biggest worry when choosing a play school / daycare?</h2>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq2"
                              value="Safety and staff background checks"
                              checked={q2 === "Safety and staff background checks"}
                              onChange={(e) => setQ2(e.target.value)}
                          />
                          Safety and staff background checks
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq2"
                              value="No way to verify if it is trustworthy"
                              checked={q2 === "No way to verify if it is trustworthy"}
                              onChange={(e) => setQ2(e.target.value)}
                          />
                          No way to verify if it is trustworthy
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq2"
                              value="My child’s allergies or medication won’t be communicated properly"
                              checked={q2 === "My child’s allergies or medication won’t be communicated properly"}
                              onChange={(e) => setQ2(e.target.value)}
                          />
                          My child’s allergies or medication won’t be communicated properly
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq2"
                              value="I don’t know what goes on inside during the day"
                              checked={q2 === "I don’t know what goes on inside during the day"}
                              onChange={(e) => setQ2(e.target.value)}
                          />
                          I don’t know what goes on inside during the day
                      </label>

            <br /><br /><br />

            <h2 className="survey-question">Q3. How do you currently share your child’s medical or dietary needs with the daycare?</h2>
                      
                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq3"
                              value="Tell them verbally and hope they remember"
                              checked={q3 === "Tell them verbally and hope they remember"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          Tell them verbally and hope they remember
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq3"
                              value="Write it on paper every time"
                              checked={q3 === "Write it on paper every time"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          Write it on paper every time
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq3"
                              value="Send a WhatsApp message"
                              checked={q3 === "Send a WhatsApp message"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          Send a WhatsApp message
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq3"
                              value="There is no proper system, it worries me"
                              checked={q3 === "There is no proper system, it worries me"}
                              onChange={(e) => setQ3(e.target.value)}
                          />
                          There is no proper system, it worries me
                      </label>

            <br /><br /><br />

            <h2 className="survey-question">Q4. What would make you feel confident sending your child to a daycare?</h2>
             

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq4"
                              value="A verified inspection from a trusted platform"
                              checked={q4 === "A verified inspection from a trusted platform"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          A verified inspection from a trusted platform
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq4"
                              value="Live CCTV access from my phone"
                              checked={q4 === "Live CCTV access from my phone"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          Live CCTV access from my phone
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq4"
                              value="A digital profile where my child’s needs are always on record"
                              checked={q4 === "A digital profile where my child’s needs are always on record"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          A digital profile where my child’s needs are always on record
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq4"
                              value="Parent reviews and ratings I can trust"
                              checked={q4 === "Parent reviews and ratings I can trust"}
                              onChange={(e) => setQ4(e.target.value)}
                          />
                          Parent reviews and ratings I can trust
                      </label>

            <br /><br /><br />

            <h2 className="survey-question">Q5. Would you use a free app to find verified, inspected daycares and play schools near you?</h2>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq5"
                              value="Yes, I would download it right now"
                              checked={q5 === "Yes, I would download it right now"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          Yes, I would download it right now
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq5"
                              value="Yes but only if play schools/daycares near me are listed"
                              checked={q5 === "Yes but only if play schools/daycares near me are listed"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          Yes but only if play schools/daycares near me are listed
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq5"
                              value="Maybe, depends on how many options are available"
                              checked={q5 === "Maybe, depends on how many options are available"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          Maybe, depends on how many options are available
                      </label>

                      <label className="survey-option">
                          <input
                              type="radio"
                              name="pq5"
                              value="No, I already have a play school/daycare I trust"
                              checked={q5 === "No, I already have a play school/daycare I trust"}
                              onChange={(e) => setQ5(e.target.value)}
                          />
                          No, I already have a play school/daycare I trust
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