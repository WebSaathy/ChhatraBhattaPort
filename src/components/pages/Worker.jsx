import React from "react";
import "./css/worker.css";
import VolunteerCard from "../Home/Volunteercard";
import Footer from "../Home/Footer";
// import Volunteercard from "../Home/Volunteercard";

const scheduleData = [
  {
    id: 1,
    date: "दिन – 25 माघ 2083",
    theme: "red",
    schedules: [
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
      {
        time: "12:30 बजे दिउँसो",
        location: "कालिका चोक, महेन्द्रनगर",
        program: "घरदैलो भेटघाट",
      },
      {
        time: "3:50 बजे साँझ",
        location: "भद्रपुर बजार",
        program: "मत माग्ने सभा",
      },
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
    ],
  },
  {
    id: 2,
    date: "दिन – 25 माघ 2083",
    theme: "blue",
    schedules: [
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
      {
        time: "12:30 बजे दिउँसो",
        location: "कालिका चोक, महेन्द्रनगर",
        program: "घरदैलो भेटघाट",
      },
      {
        time: "3:50 बजे साँझ",
        location: "भद्रपुर बजार",
        program: "मत माग्ने सभा",
      },
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
    ],
  },
    {
    id: 3,
    date: "दिन – 25 माघ 2083",
    theme: "blue",
    schedules: [
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
      {
        time: "12:30 बजे दिउँसो",
        location: "कालिका चोक, महेन्द्रनगर",
        program: "घरदैलो भेटघाट",
      },
      {
        time: "3:50 बजे साँझ",
        location: "भद्रपुर बजार",
        program: "मत माग्ने सभा",
      },
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
    ],
  },
   {
    id: 4,
    date: "दिन – 25 माघ 2083",
    theme: "blue",
    schedules: [
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
      {
        time: "12:30 बजे दिउँसो",
        location: "कालिका चोक, महेन्द्रनगर",
        program: "घरदैलो भेटघाट",
      },
      {
        time: "3:50 बजे साँझ",
        location: "भद्रपुर बजार",
        program: "मत माग्ने सभा",
      },
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
    ],
  },
   {
    id: 5,
    date: "दिन – 25 माघ 2083",
    theme: "blue",
    schedules: [
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
      {
        time: "12:30 बजे दिउँसो",
        location: "कालिका चोक, महेन्द्रनगर",
        program: "घरदैलो भेटघाट",
      },
      {
        time: "3:50 बजे साँझ",
        location: "भद्रपुर बजार",
        program: "मत माग्ने सभा",
      },
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
    ],
  },
  {
    id: 6,
    date: "दिन – 25 माघ 2083",
    theme: "blue",
    schedules: [
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
      {
        time: "12:30 बजे दिउँसो",
        location: "कालिका चोक, महेन्द्रनगर",
        program: "घरदैलो भेटघाट",
      },
      {
        time: "3:50 बजे साँझ",
        location: "भद्रपुर बजार",
        program: "मत माग्ने सभा",
      },
      {
        time: "10:00 बजे बिहान",
        location: "कैलाली नगरपालिका 4",
        program: "मत माग्ने सभा",
      },
    ],
  },
  

];

function Worker() {
  return (
    <>
  
      <div className="worker-container">
        <h1 className="page-title">अभियान तालिका<div className="line"></div></h1>

        <div className="card-wrapper">
          {scheduleData.map((card) => (
            <div key={card.id} className={`schedule-card ${card.theme}`}>
              <div className="card-header">{card.date}</div>

              <div className="table-header">
                <div>🕒 समय</div>
                <div><img className="img" src="/src/assets/images/location.png" alt="" /> स्थान</div>
                <div><img className="img" src="/src/assets/images/location.png" alt="" /> कार्यक्रम</div>
              </div>

              {card.schedules.map((item, index) => (
                <div key={index} className="table-row">
                  <div>{item.time}</div>
                  <div>{item.location}</div>
                  <div>{item.program}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
     
     <VolunteerCard />
     <Footer />
    </>
  );
}

export default Worker;
