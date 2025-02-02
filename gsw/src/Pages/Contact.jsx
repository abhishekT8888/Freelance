import React from 'react';
import contact1 from '../gsw images/Contact1.jpg';
import contact2 from '../gsw images/Contact2.jpg';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
      
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg mb-12 transition-all duration-700">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={contact1}
            alt="Contact Us"
            className="w-full h-96 object-contain rounded-xl"
          />
        </div>
        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-800 text-right mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 text-right leading-relaxed mb-4">
            We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg h-32"
            ></textarea>
            <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
      
      {/* Second Image Section */}
      <div className="flex justify-center">
        <img
          src={contact2}
          alt="Support Team"
          className="w-full max-w-3xl h-96 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
