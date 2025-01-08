import React, { useState } from "react";
import img1 from "../gsw images/Broad-Bed-Furrow-_Website-banner.webp";
import img2 from "../gsw images/plough-banner.jpeg";
import img3 from "../gsw images/t5.webp";

function FullWidthSlider() {
  const images = [img1, img2, img3];
  const captions = [
    {
      heading: "Broad Bed Furrow",
      description:
        "Say goodbye to cramped plants and hello to spacious, nutrient-rich planting beds that promote optimal growth. The Broad Bed Furrow is designed to maximize planting space, enhance soil fertility and drainage, and reduce weed growth, saving you valuable time and effort.",
    },
    {
      heading: "Plough",
      description:
        "Our innovative Plough is designed to make your gardening tasks a breeze. The sharp, durable blades effortlessly cut through soil saving you time and effort.",
    },
    {
      heading: "GSW Fighter Rotavator",
      description: "Ready to witness a farming marvel? Feast your eyes on the incredible GSW Fighter Rotavator, revolutionizing the world of agriculture!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Slider Container */}
        <div className="w-full h-full flex transition-transform duration-700 ease-in-out">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Image */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay */}
              {index === currentIndex && (
                <div
                  className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-6 rounded-lg shadow-lg"
                  style={{ width: "500px", height: "400px" }}
                >
                  <h2 className="text-4xl font-bold mb-6 leading-tight">
                    {captions[index].heading}
                  </h2>
                  <p className="text-lg font-medium leading-relaxed mb-4">
                    {captions[index].description}
                  </p>
                  <button className="mt-auto bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600">
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 focus:outline-none z-20"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 focus:outline-none z-20"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FullWidthSlider;
