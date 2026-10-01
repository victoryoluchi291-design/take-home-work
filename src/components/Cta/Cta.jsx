import React from 'react'
import "./Cta.css"
import { Link } from 'react-router-dom'
const Cta = () => {
  return (
    <div>
      {/* /* <!-- CALL TO ACTION SECTION --> */} */
 <section className="cta">
    <div className="cta-content">
       <h2>Ready to start your learning journey</h2>
       <p>join us to start learning digital skills for a better future</p>
       <Link to="/Register" className="cta-button">
         Get started
       </Link>
    </div>
 </section>
    </div>
  )
}

export default Cta
