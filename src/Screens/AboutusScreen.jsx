import React from 'react'
import "./AboutusScreen.css"
import photo from "../assets/images96.jpg"






const AboutusScreen = () => {
  return (
    <div>
     
    {/* <!-- about section --> */}
    <section className="About">
                  <div className="text-boxs">
                    <h1>About Us</h1>
                    <p>Building skills, Building futures</p>
                     </div>
                       </section>
                     <div className='About-image'>
                       <img src={photo}alt="000" />
                    </div>
                    <div className='About-writeup'>
                      <h1>LAMI DIGITAL HUB</h1>
                      <h2>Nigeria’s Leading Visual Storytelling Agency for Businesses & NGOs</h2>
                      <p>At Lami Digital Hub, we believe in the power of storytelling. Founded with a <br /> passion for visual excellence, we have spent years perfecting the art of <br />photography and videography, helping brands, organizations, and <br /> individuals communicate their stories in the most compelling way.</p>
                      <p>Our team consists of highly skilled creatives, each dedicated to transforming <br /> your vision into breathtaking visuals. With cutting-edge technology,  <br /> innovative techniques, and a deep understanding of narrative-driven <br /> content, we dont just capture moments—we create experiences that resonate.</p>
                      <p>Our mission is to empower brands, NGOs, and organizations with high-quality photography, <br /> videography, and storytelling solutions that inspire, engage, <br /> and drive impact. Through visual excellence and compelling narratives, <br />we bring stories to life—helping our clients connect with their audiences, <br />amplify their message, and create lasting impressions across global and digital platforms.</p>
                    </div>
                    <section className='story-cta'>
                      <h2>Let's Tell Your Story</h2>
                      <button>Contact Us Today</button>

                    </section>
              </div>

  )
}


export default AboutusScreen
