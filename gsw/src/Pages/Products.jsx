import React from 'react'
import Plough from '../Components/Products/Ploug'
import Rotavator from '../Components/Products/Rotavator'
import BottomTractorImage from "../gsw images/bottomimage.jpg";


function Products() {
  return (
    <>
        <Plough/>
        <Rotavator/>
        {/* Advertiseme
        nt Section with Responsive Background Image */}
        <div
          className=" bg-cover bg-center p-12 rounded-lg shadow-xl text-center w-full"
          style={{
            backgroundImage: `url(${BottomTractorImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '350px', // Ensures there's enough height for the background image to be visible
          }}
        >
          <div className="bg-black bg-opacity-60 p-8 sm:p-12 md:p-20 rounded-lg w-full">
            <h2 className="text-3xl font-bold text-white mb-6">
              Discover More About Our Ploughs!
            </h2>
            <p className="text-lg text-white mb-6 max-w-xl mx-auto">
              Are you ready to take your farming game to the next level? Our advanced ploughs provide efficiency and durability that meets your needs. 
              Take a look at our collection and make the right choice for your farm.
            </p>
            <a
            href="mailto:ombjadhav.06@gmail.com" 
            className="bg-white text-yellow-500 px-8 py-3 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-yellow-100 hover:scale-105">
              Shop Now
            </a>
          </div>
        </div>
    </>
  )
}

export default Products