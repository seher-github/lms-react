import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testimonials/Test'
import Hblog from '../../blog/Hblog'
import Hprice from '../../Hprice'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </div>
  )
}

export default Home
