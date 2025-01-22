import React from 'react'
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import AboutUsComponent from './Components/AboutUs'
import OurProduct from './Components/OurProduct'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Nav></Nav>
      <Slider></Slider>
      <AboutUsComponent></AboutUsComponent>
      <OurProduct/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App