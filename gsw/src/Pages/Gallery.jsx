import React from 'react';
import HappyTop from '../gsw images/gallery/HappyTop.jpg';
import c1 from '../gsw images/gallery/c1.jpeg';
import c2 from '../gsw images/gallery/c2.jpeg';
import c3 from '../gsw images/gallery/c3.jpeg';
import c4 from '../gsw images/gallery/c4.jpeg';
import c5 from '../gsw images/gallery/c5.jpeg';
import c6 from '../gsw images/gallery/c6.jpeg';
import c7 from '../gsw images/gallery/c7.jpeg';
import c8 from '../gsw images/gallery/c8.jpeg';
import c9 from '../gsw images/gallery/c9.jpeg';
import c10 from '../gsw images/gallery/c10.jpeg';
import c11 from '../gsw images/gallery/c11.jpeg';

import product1 from "../gsw images/update/GswRotavator1.png";
import product2 from "../gsw images/update/GswRotavator2.png";
import product3 from "../gsw images/update/GswRotavator3.png";
import product4 from "../gsw images/update/GswRotavator4.png";
import product5 from "../gsw images/update/GswRotavator5.png";
import product6 from "../gsw images/update/04.png";
import product7 from "../gsw images/update/10.png";
import product8 from "../gsw images/update/13.png";

const Gallery = () => {
  const productImages = [product1, product2, product3, product4, product5,product6,product7,product8];
  const deliveryImages = [c11, c7, c9, c8, c10, c6, c1, c3, c4, c5, c2];

  return (
    <div className="container mx-auto p-6">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Gallery</h1>
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg mb-12 transition-all duration-700">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={HappyTop}
            alt="Happy Customer Delivery"
            className="w-full h-96 object-contain rounded-xl"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 text-right mb-4">
            GSW Product Delivery
          </h1>
          <p className="text-lg text-gray-600 text-right leading-relaxed">
            This is our happy customer taking delivery of their products. At GSW, we take pride in ensuring every delivery brings a smile to our customers. Enjoy browsing through our collection of delivery moments!
          </p>
        </div>
      </div>

      {/* Product Images Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {productImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Delivery Images Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Happy Customer Deliveries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {deliveryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`Delivery ${index + 1}`}
              className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;