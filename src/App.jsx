import React from 'react'
import image from "./assets/images7.jpg";

const App = () => {
  return (
    <div>     
<section>
    <header>
 <div className="nav-link-text"> <a href="">Name</a></div>
<div className="nav-link-text"> <a href="">About</a></div>
<div className="nav-link-text"> <a href="">Content</a></div>
 <div className="nav-link-text"> <a href="">Services</a></div>

    </header>
</section> 
<section className="hero">
  <div className="overlay">
    <div className="hero-content">
      <h1>welcome to LAMI DIGITAL HUB</h1>
      <p>Building skills, Building futures</p>
      <button className="button-1">view our work</button>
    </div>
  </div>
</section>
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
{/* <!-- TESTIMONY SECTION --> */}
 <section className="Testimonials">
    <h1>Testimonals</h1>
    <h2><i>Feedback from our Students</i></h2>
   
     <div className="testimonial-container">
        <div className="card">
            <img src="c:\Users\Daniel\Downloads\images 34" alt="student image"/>
            <h3>Favor Sonia</h3>
            <p>This academy has helped me gain knowledge of gaining tech/digital skills. it has been an excellent.</p>

</div>
        <div className="card">
            <img src="c:\Users\Daniel\Downloads\images 35.jpg" alt="student image"/>
             <h3>Daniel Bethel</h3>
            <p>my experience with the academy has been very positive. </p>

        </div>
        <div className="card">
            <img src="c:\Users\Daniel\Downloads\images 36.jpg" alt="student image"/>
             <h3>Joy sunday</h3>
            <p>i would recommend the academy to anyone looking to start a career in tech.</p>

        </div>
     </div>
 </section>
 {/* <!-- CALL TO ACTION SECTION --> */}
 <section className="cta">
    <div className="cta-content">
       <h2>Ready to start your learning journey</h2>
       <p>join us to start learn digital skills for a better future</p>
       <a href="" className="cta-button">Get started</a>
    </div>
 </section>
 {/* <!-- footer --> */}
  <footer className="footer">
    <div className="footer-container">
        {/* <!-- About --> */}
         <div className="footer-box">
            <h2> Our Digital Skills Academy</h2>
            <p>Empowering students with pratical digital <br /> skills for better future</p>
         </div>
         {/* <!-- quick links --> */}
          <div className="footer-box">
            <h3>Quick Links</h3>

            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Courses</a>
            <a href="">Contact</a>
          </div>
          {/* <!-- contact --> */}
           <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>phone: +234 800 000 0000</p>
            <p>owerri: Imo State</p>
           </div>
    </div>
    {/* <!-- copyright --> */}
     <div className="copyright">
      <p>&copy; 2026 Our Digital skills Academy. All Rights Reserved</p>
     </div>
  </footer>
  </div>
  )
}

export default App
