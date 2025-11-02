/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['about', 'projects', 'skills', 'contact'];

  return (
    <nav className="w-full bg-dark-bg text-light-text shadow-lg shadow-white/20 fixed top-0 left-0 z-50">
      <div className="container mx-auto py-4 px-8 flex items-center justify-between relative">
        <a 
          href="#" 
          className="text-2xl font-bold tracking-wider hover:text-white transition-colors duration-200
                     whitespace-nowrap" 
        >
          Charan Sai Deekonda
        </a>
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className="capitalize text-lg tracking-wider hover:text-white hover:scale-105 transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-3xl text-light-text"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />} 
            </button>
        </div>

      </div>
      <div 
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} 
                    bg-dark-bg w-full absolute left-0 shadow-xl`}
      >
        <ul className="flex flex-col items-center justify-center">
          {navItems.map((item) => (
            <li key={item} className="w-full">
              <a 
                href={`#${item}`} 
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center py-4 text-lg capitalize 
                           text-light-text/90 hover:bg-light-text hover:text-dark-bg 
                           transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;