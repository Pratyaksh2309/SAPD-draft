import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import iitb from "../assets/iitb.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when the user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen && window.innerWidth < 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md z-10">
      {/* Left side: Combined Images & Text */}
      <div className="flex items-center space-x-4">
        {/* First Image (IITB Logo) */}
        <a href="/" className="flex items-center">
          <img
            src={iitb}
            height={60}
            width={60}
            className="transition-transform duration-300 transform hover:scale-110"
            alt="Logo of IITB"
          />
        </a>

        {/* Second Group: Separator, Second Image, and Text */}
        <div className="flex items-center space-x-2">
          {/* Separator Line */}
          <div className="h-16 w-px bg-gray-600" />
          {/* Second Image and Text Container */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                height={60}
                width={60}
                className="transition-transform duration-300 transform hover:scale-110"
                alt="Physics Logo"
              />
            </a>
            <div className="flex flex-col ml-2">
              <span className="text-sm font-bold text-gray-800 sm:text-xl md:text-2xl">
                Physics Department
              </span>
              <span className="text-sm text-blue-600 sm:text-xs md:text-sm">
                Indian Institute of Technology Bombay
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Navigation Links (Desktop only) */}
      <nav className="ml-auto hidden md:flex space-x-6">
        <ul className="flex space-x-6 text-blue-900 font-medium">
          {["HOME", "ACTIVITIES", "BLOGS", "MEMBERS"].map((item, index) => (
            <li
              key={index}
              className="pt-2 pb-2 text-center md:text-left group relative"
            >
              <a
                href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                className="relative hover:text-red-900 font-bold transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-900 relative z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Hamburger or Cross */}
        {menuOpen ? (
          <span className="text-2xl text-red-600">✖</span> // Cross icon when the menu is open
        ) : (
          <span className="text-2xl">☰</span> // Hamburger icon when the menu is closed
        )}
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-24 left-0 w-full bg-white z-50 flex flex-col justify-start items-center space-y-8 pl-4 pr-4 transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Mobile Menu Items */}
        {menuOpen && (
          <ul className="flex flex-col space-y-4 text-blue-900 font-medium">
            {["HOME", "ACTIVITIES", "BLOGS", "MEMBERS"].map((item, index) => (
              <li key={index} className="pt-2 pb-2 text-center group relative">
                <a
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="relative hover:text-red-900 font-bold transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
