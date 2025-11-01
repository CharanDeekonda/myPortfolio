/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
  const navItems = ['about', 'projects', 'skills', 'contact'];

  return (
    <nav className="w-full bg-dark-bg text-light-text shadow-lg shadow-white/50 fixed top-0 left-0 z-50">
      <div className="container mx-auto py-4 px-12 flex items-center justify-between relative">
        <a href="#" className="text-2xl left-9 font-bold tracking-wider hover:text-white transition-colors duration-200">
          Charan Sai Deekonda
        </a>
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8">
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

        {/* This is an empty div to balance the flex container,
            which helps if you add social icons here later.
            For now, it's not strictly needed but good practice. */}
        <div></div>

      </div>
    </nav>
  );
}

export default Navbar;