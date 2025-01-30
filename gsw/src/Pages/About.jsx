import React from 'react';
import AboutUs from '../Components/AboutUs';

function About() {
  return (
    <>
      <AboutUs />

      {/* New Section - Mission & Vision */}
      <div className="p-8 mt-16 rounded-lg shadow-lg bg-gray-50 animate-fadeIn">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Our Mission & Vision</h2>
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-8">
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to provide innovative solutions that empower farmers and businesses in the agricultural industry, enhancing efficiency, sustainability, and productivity.
            </p>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision a future where agricultural practices are transformed by cutting-edge technology, making farming smarter, more sustainable, and accessible to all.
            </p>
          </div>
        </div>
      </div>

      {/* New Section - Our Values */}
      <div className="bg-white p-8 mt-16 rounded-lg shadow-md border-l-4 border-red-600 hover:bg-gray-50 transition-all duration-300">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Our Core Values</h2>
        <ul className="list-disc pl-10 text-lg text-gray-600 space-y-4">
          <li className="hover:text-red-600 transition-all duration-300">Innovation: Embracing new technologies for agricultural growth.</li>
          <li className="hover:text-red-600 transition-all duration-300">Sustainability: Promoting eco-friendly farming practices for future generations.</li>
          <li className="hover:text-red-600 transition-all duration-300">Integrity: Upholding the highest standards of honesty and transparency.</li>
          <li className="hover:text-red-600 transition-all duration-300">Customer Focus: Delivering exceptional service and products to all our clients.</li>
        </ul>
      </div>

      {/* New Section - Contact Us */}
      <div className="p-8 mt-16 rounded-lg shadow-lg bg-gray-50 animate-fadeIn">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 text-center mb-4">
          Have questions or want to learn more? Get in touch with us, and our team will be happy to assist you.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:ombjadhav.06@gmail.com"
            className="bg-red-600 text-white py-3 px-8 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-red-700 transform hover:scale-105"
          >
            Send Us an Email
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
