import { useState, useEffect } from 'react'; 
import './Testimonial.css'; 
import cardimage from './../../assets/images7.jpg'; 
import cardimage2 from './../../assets/images35.jpg'; 
import cardimage3 from './../../assets/images36.jpg'; 
import axios from 'axios'; 

const Testimonial = () => { 
  const [users, setUsers] = useState([]); 

  const getUsers = async () => { 
    try { 
      const response = await axios.get("https://students-learning-api.onrender.com/api/auth"); 
      setUsers(response.data); 
      console.log(response.data); 
    } catch (error) { 
      console.log(error); 
    } 
  }; 

  useEffect(() => { 
    getUsers(); 
  }, []); 

  return ( 
    <div> 
      {/* <!-- TESTIMONY SECTION --> */} 
      <section className="Testimonials"> 
        <h1>Testimonials</h1> 
        <h2><i>Feedback from our Students</i></h2> 
        
        <div className="testimonial-container"> 
          {users.map((user) => ( 
            <div className="card" key={user.id}> 
              <img src={cardimage} alt="user avatar" /> 
              <h3>{user.firstName} {user.lastName}</h3> 
              <p>{user.email}</p> 
               <p>{user.phoneNumber}</p>
              <p>Address: {user.address}</p> 
            </div> 
          ))} 
        </div> 
      </section> 
    </div> 
  ); 
}; 

export default Testimonial;