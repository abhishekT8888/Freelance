import React from 'react';
import logo from '../assets/gsw-icon (1).png';

function Nav() {
  return (
    <div className="bg-white p-4 w-full px-8 border-b-2 border-gray-400">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <ul className="flex space-x-8">
          <li>
            <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Home
            </button>
          </li>
          <li>
            <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              About Us
            </button>
          </li>
          <li>
            <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Products
            </button>
          </li>
          <li>
            <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Gallery
            </button>
          </li>
          <li>
            <button className="text-[18px] font-monda font-semibold text-black hover:text-orange-500 hover:font-bold hover:[&::before]:content-['['] hover:[&::after]:content-[']']">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
