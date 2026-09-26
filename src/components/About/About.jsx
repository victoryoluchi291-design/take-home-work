import React from 'react'
import "./About.css"
import image from "../../assets/images7.jpg"

const About = () => {
  return (
    <div>
      {/* <!-- about section --> */}
           <section className="about">
              <div className="about-text">
                  <h4>About us</h4>
                  <h3>Building skills,<br />Building futures</h3>
                  <p>At Morning Class Digital Skills Academy, we provide Pratical Training that create a Future</p>
                  <ul>
                      <li> &#10004;Pratical hands-on learning</li>
                     <li> &#10004; Expert instructor</li> 
                      <li> &#10004;Flexible learning schedule  </li>
                         </ul>
                  <a href="#" className="btn">Learn more</a>
                    </div>
              <div className="about-image">
                  <img src={image}alt="123"/>
      
              </div>
           </section>
    </div>
  )
}

export default About
