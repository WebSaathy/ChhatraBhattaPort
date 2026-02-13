import React from "react";
import "../style/VolunteerCard.css";
import volunteerImg from "/src/assets/images/volunteer.jpg"; 

export default function VolunteerCard() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card-left">
          <img src={volunteerImg} alt="Volunteers" />
        </div>

        <div className="card-right">
          <h1 className="title">स्वयंसेवक भएर हामीसँग जोडिनुहोस्</h1>

          <p className="subtitle">
            तपाईंको देशप्रतिको माया र निःस्वार्थ योगदान हाम्रो साझा लक्ष्यको
            आधारस्तम्भ हो। स्वयंसेवकका रूपमा हाम्रो यात्रामा सक्रिय योगदान दिनुहोस्।
          </p>

          <form className="form-grid">
            <div className="input-group">
              {/* <label>पूरा नाम: <span>*</span></label> */}
              <input placeholder="पूरा नाम:* " type="text" />
            </div>

            <div className="input-group">
              {/* <label>ठेगाना: <span>*</span></label> */}
              <input placeholder="ठेगाना: *" type="text" />
            </div>

            <div className="input-group">
              {/* <label>फोन नम्बर: <span>*</span></label> */}
              <input placeholder="फोन नम्बर:" type="text" />
            </div>

            <div className="input-group">
              {/* <label>Email:</label> */}
              <input placeholder="Email" type="email" />
            </div>
          </form>

          <a href="/" className="submit-btn">हामीसँग जोडिनुहोस्</a>
        </div>
      </div>
    </div>
  );
}
