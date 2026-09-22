import React from 'react'
import "./Testimonial.css"
import cardimage from "./../../assets/images7.jpg"
import cardimage2 from "./../../assets/images35.jpg"
import cardimage3 from "./../../assets/images36.jpg"
const Testimonial = () => {
  return (
    <div>
{/* <!-- TESTIMONY SECTION --> */}
 <section className="Testimonials">
    <h1>Testimonals</h1>
    <h2><i>Feedback from our Students</i></h2>
   
     <div className="testimonial-container">
        <div className="card">
            <img src={cardimage} alt="456"/>
            <h3>Favor Sonia</h3>
            <p>This academy has helped me gain knowledge of gaining tech/digital skills. it has been an excellent.</p>

</div>
        <div className="card">
            <img src={cardimage2} alt="678"/>
             <h3>Daniel Bethel</h3>
            <p>my experience with the academy has been very positive. </p>

        </div>
        <div className="card">
            <img src={cardimage3} alt="900"/>
             <h3>Joy sunday</h3>
            <p>i would recommend the academy to anyone looking to start a career in tech.</p>

        </div>
     </div>
 </section>
 
    </div>
  )
}

export default Testimonial
