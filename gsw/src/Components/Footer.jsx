import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth' // Enable smooth scrolling
    });
  }

  return (
    <nav className="bg-slate-950 text-red-600 p-12">
      {/* First Row: Contact Info, Quick Links, Product List */}
      <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-8 mt-10">
        {/* Contact Info */}
        <div className="flex flex-col md:w-1/3">
          <h4 className="text-lg font-bold text-white mb-3">Contact Info</h4>
          <div className="flex items-center mb-3">
            <FaMapMarkerAlt className="mr-2 text-red-600" />
            <a
              href="https://www.google.com/maps/place/Gurumauli+steel+works+mfg+plough+and+agriculture+implements/@19.9858523,76.5209591,15.84z/data=!4m6!3m5!1s0x3bd083fd48b95d7d:0x528783659ce96fcf!8m2!3d19.9856893!4d76.5241933!16s%2Fg%2F11nmcxpx5c?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature
              className="hover:text-white"
            >
              HIRDAO ROAD LONAR 443302 DIST BULDHANA (MH)
            </a>
          </div>

          <div className="flex items-center mb-3">
            <FaPhoneAlt className="mr-2 text-red-600" />
            <a href="tel:+919545208208" className="hover:text-white">
              +91 954 520 8208
            </a>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-red-600" />
            <a
              href="mailto:gurumaulisteelworks01@gmail.com"
              className="hover:text-white"
            >
              gurumaulisteelworks01@gmail.com
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:w-1/3">
          <h4 className="text-lg font-bold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">Home</span></Link></li>
            <li><Link to="/about" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">About Us</span></Link></li>
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">Products</span></Link></li>
            <li><Link to="/gallery" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">Gallery</span></Link></li>
            <li><Link to="/contact" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">Contact Us</span></Link></li>
            <li><Link to="/brochure" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">Brochure</span></Link></li>
          </ul>
        </div>

        {/* Product Links */}
        <div className="flex flex-col md:w-1/3">
          <h4 className="text-lg font-bold text-white mb-3">Products</h4>
          <ul className="space-y-2">
            {/* Update links to point to /products */}
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Reversible Plough</span></Link></li>
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">Two Bottom GSW Hydraulic Reversible Plough</span></Link></li>
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Auto Reversible Plough</span></Link></li>
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Highlighted Reversible Plough</span></Link></li>
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Kubota Special Reversible Plough</span></Link></li>
            <li><Link to="/products" onClick={scrollTop} className="hover:text-white flex items-center">→ <span className="ml-2">GSW Fighter Rotavator Reversible Plough</span></Link></li>
          </ul>
        </div>
      </div>

      {/* Second Row: Footer */}
      <div className="mt-8 text-center md:text-left border-t bg-black border-gray-700 pt-4">
        <p className="text-sm text-gray-400 hover:text-white">© 2023 Gurumauli Steel Works. All Rights Reserved.</p>
      </div>
    </nav>
  );
};

export default Footer;
