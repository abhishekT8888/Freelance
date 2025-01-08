import React from "react";
import farmerImage from "../gsw images/About-us-picture-1024x683.webp"; 
import satisfactionIcon from "../gsw images/10633362_4501662-removebg-preview.png"; 

const AboutUsComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-8">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={farmerImage}
          alt="Farmer with tractor"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Right Section - Text and Details */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-gray-500 uppercase font-semibold text-lg mb-4">
          About Us
        </h2>
        <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
          A Company of <br /> Excellent Services
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Gurumauli Steel Works Under Brand has diverse range of products which
          include two bottom reversible plough, two bottom hydraulic reversible
          plough, two bottom automatic reversible plough, broad bed furrow
          (BBF) planter, and rotavators. We emerged as one of the leading
          manufacturers of farm equipment in India with the brand name GSW.
        </p>
        <hr className="border-t border-gray-300 my-6" />
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={satisfactionIcon}
            alt="Satisfaction Guaranteed"
            className="w-20 h-20 md:mr-6 mb-4 md:mb-0"
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
              <button className="bg-red-600 text-white py-2 px-6 rounded shadow hover:bg-red-700 transition">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
