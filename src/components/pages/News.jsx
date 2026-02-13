import React from 'react'
import "./css/news.css"
import VolunteerCard from '../Home/Volunteercard'
import Footer from '../Home/Footer'

function News() {
  return (
    <>
     <div className="news-container">
        <h1 className="news-title">गतिविधि<div className="line"></div></h1>
      <div className="news-cards">
        <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
         <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
         <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
            <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
            <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
            <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
            <div className="newscard">
        <img src="/src/assets/images/news.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
            <div className="newscard">
        <img src="/src/assets/images/volunteer.jpg" alt="" />
        <p>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम</p>
        </div>
      </div>
    
    </div>
    <VolunteerCard />
    <Footer />
    </>
  )
}

export default News