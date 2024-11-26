import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const footer = document.getElementById("footer");
    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // Check if footer is in the viewport
    if (footerPosition <= screenPosition) {
      setIsNavbarVisible(false); // Hide navbar when footer is in view
    } else {
      setIsNavbarVisible(true); // Show navbar when footer is not in view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gradient-to-r from-teal-500 via-orange-400 to-teal-500 text-white py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavbarVisible ? "block" : "hidden"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Text Below */}
        <div className="flex items-center gap-2">
          <img
            src="/teeLogo.png" // Path to your logo image
            alt="TeeCulture69 Logo"
            className="h-10 w-15" // Adjust size of the logo
          />
          <span className="font-heading text-2xl">TeeCulture69</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Regular Navbar for Larger Screens */}
        <div className="hidden lg:flex space-x-6">
          <a href="#about" className="hover:text-orange-light">About</a>
          <a href="#products" className="hover:text-orange-light">Products</a>
          <a href="#contact" className="hover:text-orange-light">Contact</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-teal-dark text-white text-center py-6 fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out`}
      >
        <ul className="space-y-4 font-body text-lg">
          <li>
            <a href="#about" className="hover:text-orange-light">About</a>
          </li>
          <li>
            <a href="#products" className="hover:text-orange-light">Products</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-light">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
