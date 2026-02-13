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
function Home() {
  return (
    <div className='container'>
    <Navbar/>
    <Hero/>
    <Second/>
    <Third/>
    <Fourth/>
    <Five/>
    <ActivityBento/>
    <VotingSteps/>
    </div>
  )
}

export default Home