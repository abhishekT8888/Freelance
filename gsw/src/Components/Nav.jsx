import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gsw-icon (1).png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white p-4 w-full px-8 border-b-2 border-gray-200 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 md:ml-auto md:items-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Products', path: '/products' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact Us', path: '/contact' },
          ].map((item, index) => (
            <li key={index} className="group relative">
              <Link
                to={item.path}
                className="text-lg font-monda font-semibold text-gray-800 hover:text-orange-600 transition-all duration-300 ease-in-out hover:underline"
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-3xl text-gray-800">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden bg-white flex-col space-y-4 transition-all duration-300 ease-in-out mt-4 shadow-lg p-4 rounded-md border border-gray-200`}
      >
        {[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Products', path: '/products' },
          { name: 'Gallery', path: '/gallery' },
          { name: 'Contact Us', path: '/contact' },
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-lg font-monda font-semibold text-gray-800 hover:text-orange-600 transition-all duration-300 ease-in-out"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
