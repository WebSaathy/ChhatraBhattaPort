import React from 'react'
import Navbar from './Navbar'
import '../style/Home.scss'
import Hero from './Hero'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Five from './Five'
import ActivityBento from './ActivityBento'
import VotingSteps from './VotingSteps'
import Footer from './Footer'
function Home() {
  return (
    <div className='container'>
   
    <Hero/>
    <Second/>
    <Third/>
    <Fourth/>
    <Five/>
    <ActivityBento/>
    <VotingSteps/>
    <Footer />
    </div>
  )
}

export default Home