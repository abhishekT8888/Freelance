import React from 'react';
import logo from '../assets/gsw-icon (1).png';

function Nav() {
  return (
    <div className="bg-white p-6 w-full px-12 border-b-4 border-gray-400">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <ul className="flex space-x-12 ">
          <li>
            <button className="text-[22px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Home
            </button>
          </li>
          <li>
            <button className="text-[22px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              About Us
            </button>
          </li>
          <li>
            <button className="text-[22px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Products
            </button>
          </li>
          <li>
            <button className="text-[22px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Gallery
            </button>
          </li>
          <li>
            <button className="text-[22px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
