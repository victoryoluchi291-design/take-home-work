import React from 'react'
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Testimonial from "../components/Testimonial/Testimonial";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer"

const LandingPageScreen = () => {
  return (
    <div>     
      <Hero />
      <About />
     <Testimonial />
     <Cta />
     
    </div>
  )
}

export default LandingPageScreen
