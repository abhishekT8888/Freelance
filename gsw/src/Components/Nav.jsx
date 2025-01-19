import React, { useState } from 'react';
import logo from '../assets/gsw-icon (1).png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white p-4 w-full px-8 border-b-2 border-gray-400">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Navigation Menu (Desktop) */}
        <ul className="hidden md:flex md:space-x-8 md:ml-auto md:items-center">
          {['Home', 'About Us', 'Products', 'Gallery', 'Contact Us'].map(
            (item, index) => (
              <li key={index}>
                <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
                  {item}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Menu Button (visible on mobile only) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Navigation Menu (Mobile) */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden bg-white md:bg-transparent flex-col space-y-4 transition-all duration-300 ease-in-out mt-4`}
      >
        {['Home', 'About Us', 'Products', 'Gallery', 'Contact Us'].map(
          (item, index) => (
            <li key={index}>
              <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
                {item}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Nav;
