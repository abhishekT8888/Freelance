import React from 'react';
import HeaderTractor from "../../gsw images/update/GswRotavator4.png";
import HiTechImage from "../../gsw images/p9.webp";
import TwoBottam from "../../gsw images/p8.webp";
import HiTechAuto from "../../gsw images/p5.webp";
import HiTechHighted from "../../gsw images/p6.webp";
import HiTechKubota from "../../gsw images/p7.webp";

function Plough() {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 relative w-full">
      <div className="w-full relative">
        {/* Header Section */}
        <div 
          className="relative h-[600px] flex items-start justify-start p-8 bg-cover bg-center rounded-lg w-full"
          style={{ backgroundImage: `url(${HeaderTractor})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Darker overlay for better text visibility */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-white leading-tight text-shadow-md">
              Our <span className="text-yellow-500">Plough!</span>
            </h1>
            <p className="text-lg text-white mt-4 max-w-sm">
              Our innovative Plough is designed to make your gardening tasks easier, featuring sharp and durable blades.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-32 w-full ">
          {[ 
            { img: HiTechImage, name: "GSW HI TECH Reversible Plough" },
            { img: TwoBottam, name: "Two Bottom GSW Hydraulic Reversible Plough" },
            { img: HiTechAuto, name: "GSW Hi Tech Auto Reversible Plough" },
            { img: HiTechHighted, name: "GSW Hi Tech Highted Reversible Plough" },
            { img: HiTechKubota, name: "GSW Hi Tech Kubota Special Reversible Plough" }
          ].map((product, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="h-64 md:h-72 lg:h-80 object-contain w-full transition-transform duration-300 transform hover:scale-110" 
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-4 transition-all duration-300 hover:text-yellow-500">{product.name}</h3>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Features of <span className="text-yellow-500">our Plough!</span>
          </h2>
          <ul className="space-y-6">
            {[
              "Two bottom plough has proved excellent performance in primary tillage operations.",
              "Developed in heavy and extra models for the first time in India.",
              "Heavy duty 90mm main shaft used for all models.",
              "Easy to maintain with low cost of maintenance.",
              "Less fuel consumption and less load to tractor.",
              "Models available from 30 to 55 HP."
            ].map((feature, index) => (
              <li
                key={index}
                className="bg-gray-100 p-5 rounded-lg text-xl font-medium text-gray-700 transition-all duration-300 transform hover:bg-yellow-100 hover:scale-105 hover:shadow-lg"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Plough;
