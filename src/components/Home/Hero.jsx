import React from 'react'
import '../style/Hero.scss'
import CandidateCard from './CandidateCard'
function Hero() {
  return (
    <>
    <div className="container">
      <main>
       <div className="left">
        <img src="half.svg"  className='map' alt="map" />


       </div>
       <div className="center">
        <img src="hero.svg" alt="" />

       </div>
       <div className="right">
        <div className="text">
          <div className="h1">
            <h1>छत्रबहादुर <span>भट्ट</span></h1>
          </div>
          <div className="lines">
            <div></div>
            <div></div>

          </div>
          <div className="p">
            <h3><span>स्वतन्त्र उम्मेदवार</span>  — प्रतिनिधि सभा कैलाली <span>क्षेत्र नम्बर ४</span></h3>

          </div>

        </div>
        <div className="button">
          <button className='primary'>मेरो परिचय</button>
          <button className='ghost'>सदस्य बहुहोस्</button>

        </div>
       

       </div>
      </main>
    </div>
    </>
  )
}

export default Hero