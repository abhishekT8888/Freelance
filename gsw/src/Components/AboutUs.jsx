import React from "react";
import farmerImage from "../gsw images/About-us-picture-1024x683.webp"; 
import satisfactionIcon from "../gsw images/10633362_4501662-removebg-preview.png";
import ProductsIcon from "../gsw images/icons8-factory-50.png";
import InstalledIcon from "../gsw images/icons8-services-50.png";
import HappyIcon from "../gsw images/icons8-smile-50.png";
import AwardIcon from "../gsw images/icons8-award-50.png";

const AboutUsComponent = () => {
  return (
    <div>
      {/* Left Section - Image and Right Section - Text and Details */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-8 space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={farmerImage}
            alt="Farmer with tractor"
            className="rounded-lg shadow-lg max-w-full h-auto transition-transform duration-500 transform hover:scale-105"
          />
        </div>

        {/* Right Section - Text and Details */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-gray-500 uppercase font-semibold text-lg mb-4">
            About Us
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6 leading-tight">
            A Company of <br /> Excellent Services
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Gurumauli Steel Works Under Brand has a diverse range of products
            which include two-bottom reversible plough, two-bottom hydraulic
            reversible plough, two-bottom automatic reversible plough, broad bed
            furrow (BBF) planter, and rotavators. We emerged as one of the leading
            manufacturers of farm equipment in India with the brand name GSW.
          </p>
          <hr className="border-t border-gray-300 my-6" />
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={satisfactionIcon}
              alt="Satisfaction Guaranteed"
              className="w-20 h-20 md:mr-6 mb-4 md:mb-0 transition-transform duration-500 transform hover:scale-110"
            />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                GURUMAULI STEEL WORKS
              </h3>
              <p className="text-red-600 font-semibold text-xl mb-4">
                ISO 9001:2015 Certificate
              </p>
              {/* Button with Google Drive Link */}
              <a
                href="https://drive.google.com/file/d/1yB5rF0JGDQAVbV5gNB4rOqq3MDXNtmxR/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-red-600 text-white py-2 px-6 rounded shadow hover:bg-red-700 transition-transform duration-300 transform hover:scale-110">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20 p-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={ProductsIcon}
            alt="PRODUCTS MANUFACTURED ICON"
            className="bg-red-700 rounded-full p-6 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <h1 className="text-black text-4xl font-normal font-monda">4,000+</h1>
          <h2 className="text-xl font-monda text-gray-600">PRODUCTS MANUFACTURED</h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={InstalledIcon}
            alt="INSTALLED CAPACITY PER ANNUM."
            className="bg-red-700 rounded-full p-6 transition-transform duration-500 transform hover:scale-110"
          />
          <h1 className="text-black text-4xl font-normal font-monda">3,500+</h1>
          <h2 className="text-xl font-monda text-gray-600">INSTALLED CAPACITY PER ANNUM</h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={HappyIcon}
            alt="HAPPY CUSTOMERS"
            className="bg-red-700 rounded-full p-6 transition-transform duration-500 transform hover:scale-110"
          />
          <h1 className="text-black text-4xl font-normal font-monda">5,000+</h1>
          <h2 className="text-xl font-monda text-gray-600">HAPPY CUSTOMERS</h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={AwardIcon}
            alt="AWARD WINNER"
            className="bg-red-700 rounded-full p-6 transition-transform duration-500 transform hover:scale-110"
          />
          <h1 className="text-black text-4xl font-normal font-monda">120+</h1>
          <h2 className="text-xl font-monda text-gray-600">AWARD WINNER</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
