import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <section>
          <header>
       <div className="nav-link-text"> <Link to="/">HOME</Link>
       </div>
      <div className="nav-link-text"> <Link to="/ContactUsScreen">CONTACT</Link>
      </div>
      <div className="nav-link-text"> <Link to="/AboutusScreen">ABOUT</Link>
      </div>
       <div className="nav-link-text">  <Link to="/ServicesScreen">SERVICES</Link>
       </div>
      
          </header>
      </section> 
      
    </div>
  )
}

export default Header
