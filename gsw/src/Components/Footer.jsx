import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <nav className="bg-slate-950 text-red-600 p-12">
      {/* First Row: Contact Info, Quick Links, Product List */}
      <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-8 mt-10">
        {/* Contact Info */}
        <div className="flex flex-col md:w-1/3">
          <h4 className="text-lg font-bold text-white mb-3">Contact Info</h4>
          <div className="flex items-center mb-3">
            <FaMapMarkerAlt className="mr-2 text-red-600" />
            <p className="hover:text-white">HIRDAO ROAD LONAR 443302 DIST BULDHANA (MH)</p>
          </div>
          <div className="flex items-center mb-3">
            <FaPhoneAlt className="mr-2 text-red-600" />
            <p className="hover:text-white">+91 954 520 8208</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-red-600" />
            <p className="hover:text-white">info@gsw.net.in</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:w-1/3">
          <h4 className="text-lg font-bold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white flex items-center">→ <span className="ml-2">Home</span></a></li>
            <li><a href="#about" className="hover:text-white flex items-center">→ <span className="ml-2">About Us</span></a></li>
            <li><a href="#products" className="hover:text-white flex items-center">→ <span className="ml-2">Products</span></a></li>
            <li><a href="#gallery" className="hover:text-white flex items-center">→ <span className="ml-2">Gallery</span></a></li>
            <li><a href="#contact" className="hover:text-white flex items-center">→ <span className="ml-2">Contact Us</span></a></li>
            <li><a href="#brochure" className="hover:text-white flex items-center">→ <span className="ml-2">Brochure</span></a></li>
          </ul>
        </div>

        {/* Product Links */}
        <div className="flex flex-col md:w-1/3">
          <h4 className="text-lg font-bold text-white mb-3">Products</h4>
          <ul className="space-y-2">
            <li><a href="#gsw-hi-tech-plough" className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Reversible Plough</span></a></li>
            <li><a href="#gsw-hydraulic-plough" className="hover:text-white flex items-center">→ <span className="ml-2">Two Bottam GSW Hydraulic Reversible Plough</span></a></li>
            <li><a href="#gsw-auto-plough" className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Auto Reversible Plough</span></a></li>
            <li><a href="#gsw-highlighted-plough" className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Highted Reversible Plough</span></a></li>
            <li><a href="#kubota-special-plough" className="hover:text-white flex items-center">→ <span className="ml-2">GSW Hi Tech Kubota Special Reversible Plough</span></a></li>
            <li><a href="#fighter-rotavator" className="hover:text-white flex items-center">→ <span className="ml-2">GSW Fighter Rotavator Reversible Plough</span></a></li>
            <li><a href="#bbf-5-tyne" className="hover:text-white flex items-center">→ <span className="ml-2">GSW 5 Tyne Broad Bed Furrow (BBF)</span></a></li>
            <li><a href="#bbf-7-tyne" className="hover:text-white flex items-center">→ <span className="ml-2">GSW 7 Tyne Broad Bed Furrow (BBF)</span></a></li>
            <li><a href="#bbf-9-tyne" className="hover:text-white flex items-center">→ <span className="ml-2">GSW 9 Tyne Broad Bed Furrow (BBF)</span></a></li>
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
