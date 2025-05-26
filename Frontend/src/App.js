import React from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css"; 
import Navbar from "./Component/Navbar"
import Hero from "./Component/Hero"
import WorkoutSession from "./Component/WorkoutSession"
import Gallery from "./Component/Gallery"
import Pricing from "./Component/Pricing"
import Contact from "./Component/Contact"
import BMICalculator from "./Component/BMICalculator"
import Footer from "./Component/Footer"


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSession/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/> 
      <ToastContainer theme='dark' position='top-center'/> 
    </Router>
  )
}

export default App
