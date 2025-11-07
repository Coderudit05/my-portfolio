import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50); // that means ke jab user scroll karega 50px se zyada to shadow aa jayega
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu handlers
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Unified navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "My Projects" },
    { path: "/workshops", label: "Workshops" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact Me" },
  ];

  return (
    <nav
      className={`text-white py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-[#050414]/95 via-[#0a0a1a]/90 to-[#050414]/95 border-b border-gray-700 backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition z-50"
        onClick={closeMobileMenu}
      >
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold text-white">U</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-wider">UDIT</span>
          <span className="text-xs text-blue-400">NAMDEV</span>
        </div>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10 xl:gap-12">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `transition duration-200 ${
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }`
            }
            onClick={closeMobileMenu}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#0a0a1a]/95 backdrop-blur-xl border-l border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 pt-24 px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-lg transition py-2 ${
                  isActive
                    ? "text-blue-400 border-l-4 border-blue-400 pl-4"
                    : "hover:text-blue-400 hover:pl-4"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
