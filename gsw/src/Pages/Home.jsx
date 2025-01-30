import React from 'react'
import Slider from '../Components/Slider'
import AboutUsComponent from '../Components/AboutUs'
import OurProduct from '../Components/OurProduct'
import Testimonials from '../Components/Testimonials'

function Home() {
  return (
    <>
      <Slider></Slider>
      <AboutUsComponent></AboutUsComponent>
      <OurProduct/>
      <Testimonials/>
    </>
  )
}

export default Home