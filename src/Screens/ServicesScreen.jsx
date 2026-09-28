import React from 'react'
import "./ServiceScreen.css"
import coverage from "../assets/images81.jpg"
import media from "../assets/images82.jpg"
import corporate from "../assets/images80.jpg"
import ngo from "../assets/images99.jpg"
import content from "../assets/images86.jpg"
import train from "../assets/images85.jpg"

const ServicesScreen = () => {
  return (
    <div>
      {/* Our services */}
      <section className='service'>
        <div className='text-box'>
          <h1>Services</h1>
          <p>What we offer</p>
        </div>
      </section>
      {/* services-section */}
      <section className='services-section'>
        <div className='services-container'>
        <div className='service-card'>
          <h3>Event Coverage</h3>
          <img src={coverage} alt="999" />
          <p>Every event has a story—let’s tell yours. <br /> From high-profile corporate events to intimate gatherings, <br /> our expert team ensures that every key moment is beautifully captured. <br /> With a keen eye for detail and an instinct for timing, <br /> we deliver stunning photos and cinematic videos that allow your audience to relive the experience over and over again.</p>
         <button>Book Now</button>
        </div>
        <div className='service-card'>
          <h3>Social Media Content Creation</h3>
          <img src={media}alt="888" />
          <p>In today’s digital world, compelling content is key to engagement. <br /> We craft high-quality photo and video content tailored for social media platforms, ensuring your brand stays relevant and captivates your audience. From short-form videos to behind-the-scenes visuals, <br /> we help you create a strong online presence. </p>
          <button>Book Now</button>
        </div>
        <div className='service-card'>
          <h3>Corporate Photography and Videography</h3>
          <img src={corporate} alt="777" />
         <p>Your brand deserves visuals that exude professionalism and authenticity. <br /> We specialize in corporate headshots, brand storytelling videos, product photography, and event documentation that strengthen your brand’s identity and enhance your public image. From boardrooms to behind-the-scenes, we capture the essence of your organization with elegance and precision.</p>
        <button>Book Now</button>
        </div>
        <div className='service-card'>
          <h3>NGO and Impact Storytelling</h3>
          <img src={ngo} alt="666" />
          <p>Powerful visuals drive change. We partner with NGOs and development organizations to craft compelling photo and video documentaries that amplify their impact. Through emotional storytelling, we give voice to your beneficiaries, showcase your initiatives, and inspire action from donors, partners, and the world at large.</p>
          <button>Book Now</button>
        </div>
        <div className='service-card'>
          <h3>Thought Leadership Content</h3>
          <img src={content} alt="555" />
          <p>Position yourself as an authority in your industry with professionally <br /> curated thought leadership content. We produce executive interviews, industry insights, and documentary-style videos that enhance your credibility and influence within your sector.</p>
          <button>Book Now</button>
        </div>
        <div className='service-card'>
          <h3>Training and Capacity Building</h3>
          <img src={train}alt="444" />
          <p>We believe in empowering others to tell impactful stories. <br /> Our specialized training programs are designed for individuals and organizations looking to enhance their storytelling skills</p>
          <button>Book Now</button>
        </div>

      </div>
      </section>
      
    </div>
  )
}

export default ServicesScreen
