import React from "react";
import { FaInstagram, FaChevronUp } from "react-icons/fa"; // Add Chevron Up icon for 'go to top'

const Footer = () => {
  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-teal-500 via-orange-400 to-teal-500 text-white h-[80px] flex items-center justify-between px-8 relative"
    >
      <div className="flex flex-col justify-center">
        <p className="text-sm">
          TeeCulture69 - The ultimate destination for premium, comfortable, and stylish apparel.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-xs">&copy; 2024 TeeCulture69. All rights reserved.</p>
      </div>

      <div className="flex justify-center items-center">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/tee_culture69/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-orange-100 transition-all duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      {/* "Go to Top" Icon */}
      <div
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 cursor-pointer text-2xl hover:text-black transition-all duration-300"
      >
        <FaChevronUp />
      </div>
    </footer>
  );
};

export default Footer;
