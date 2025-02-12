import React, { useState, useEffect } from "react";
import img2 from "../gsw images/plough-banner.jpeg";
import img3 from "../gsw images/Fighter.png";

function FullWidthSlider() {
  const images = [ img2, img3];
  const captions = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Change the slide automatically
    }, 5000); // Increased slide time to 5 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      {/* Slider Container */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Apply the sliding effect
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div
              className={`absolute top-1/2 left-8 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 md:p-6 rounded-lg shadow-lg transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "500px",
                maxHeight: "400px",
              }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                {captions[index].heading}
              </h2>
              <p className="text-sm md:text-lg font-medium leading-relaxed mb-4">
                {captions[index].description}
              </p>
              <button className="mt-auto bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 focus:outline-none z-20 md:left-8"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 focus:outline-none z-20 md:right-8"
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
  );
}

export default FullWidthSlider;
