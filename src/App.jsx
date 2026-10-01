import React from 'react'
import HomePageScreen from './Screens/HomePageScreen';
import { Route, Routes } from 'react-router-dom';
import ContactUsScreen from './Screens/ContactUsScreen';
import Header from './components/Header/Header';
import AboutusScreen from './Screens/AboutusScreen';
import Footer from "./components/Footer/Footer";
import ServicesScreen from './Screens/ServicesScreen';
import LoginScreen from "./Screens/LoginScreen";
import RegistrationForm from "./Screens/RegistrationForm";

const App = () => {
  return (
    <div> 
      <Header />
    <Routes>
      <Route path="/" element={<HomePageScreen />} />
      <Route path="/ContactUs" element={<ContactUsScreen />} />
      <Route path="/Aboutus" element={<AboutusScreen />} />
      <Route path="/Services" element={<ServicesScreen />} />
      <Route path="/HomePage" element={<HomePageScreen />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Register" element={<RegistrationForm />} />

    </Routes>
    <Footer />
    <div />
 
    </div>
  )
}

export default App
