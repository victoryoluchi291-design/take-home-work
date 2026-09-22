import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
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

export default Footer
