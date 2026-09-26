import React from 'react'
import LandingPageScreen from './Screens/HomePageScreen';
import { Route, Routes } from 'react-router-dom';
import ContactUsScreen from './Screens/ContactUsScreen';
import Header from './components/Header/Header';
import AboutusScreen from './Screens/AboutusScreen';
import Footer from "./components/Footer/Footer";
import ServicesScreen from './Screens/ServicesScreen';

const App = () => {
  return (
    <div> 
      <Header />
    <Routes>
      <Route path="/" element={<LandingPageScreen />} />
      <Route path="/ContactUsScreen" element={<ContactUsScreen />} />
      <Route path="/AboutusScreen" element={<AboutusScreen />} />
      <Route path="/ServicesScreen" element={<ServicesScreen />} />
    </Routes>
    <Footer />
    <div />
 
    </div>
  )
}

export default App
