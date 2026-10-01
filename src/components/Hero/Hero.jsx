import React from 'react'
import "./Hero.css";
import {Link} from "react-router-dom"



const Hero = () => {
  return (
    <div>
      {/* hero section    */}
<section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>welcome to LAMI DIGITAL HUB</h1>
            <p>Building skills, Building futures</p>
           <Link to="/Register"><button className="button-1">view our work</button></Link>
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
