import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // Get the current year automatically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark-bg text-light-text py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Social Icons */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a 
            href="https://github.com/CharanDeekonda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/charan-sai-deekonda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center md:text-right">
          <p className="text-light-text/80">
            © {currentYear} Charan Sai Deekonda. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;