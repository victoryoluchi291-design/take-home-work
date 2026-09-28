import React from 'react'
import "./ContactUsScreen.css"
const ContactUsScreen = () => {
  return (
    <div>
      {/* contact */}
      <section className='Contact'>
        <div className='texts-box'>
          <h1>Contact</h1>
          <p>Join us to start learning digital skills for a better future</p>
        </div>
        </section>
        <section className='contact-content'>
          <div className='contact-info'>
            <h2>STAY IN TOUCH</h2>
         <p> <strong>Location</strong> Akwa Ibom, Nigeria</p>
        <p><strong>Email</strong> lamistudiostech@gmail.com</p>
         <p><strong>Phone</strong> +234 806 886 8942</p>
          </div>
          
         <div className='contact-form'>
          <input type="text" placeholder='Name'/>
           <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Phone'/>
            <textarea placeholder="Message"></textarea>
            <button>submit</button>

         </div>
        </section>
    </div>
  );
}

export default ContactUsScreen
