import { useState, useEffect } from "react";
import logo from "../assets/kindertrack_logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: "house-door" },
    { name: "Programs", href: "#programs", icon: "book" },
    { name: "Features", href: "#features", icon: "stars" },
    { name: "About", href: "#about", icon: "info-circle" },
    { name: "Contact", href: "#contact", icon: "envelope" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-blue-900/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 lg:px-10">
        {/* ✅ Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="KinderTrack Logo"
            className="h-7 md:h-8 w-auto drop-shadow-md"
          />
        </a>

        {/* ✅ Desktop Nav Links (No Icons) */}
        <div className="hidden md:flex items-center space-x-8 font-dmsans font-medium">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    scrolled
                      ? "text-white hover:text-blue-300"
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ CTA Button */}
          <a
            href="#get-started"
            className={`ml-4 px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm border ${
              scrolled
                ? "bg-white text-blue-900 border-white hover:bg-transparent hover:text-white"
                : "bg-blue-900 text-white border-blue-900 hover:bg-white hover:text-blue-900"
            }`}
          >
            Get Started
          </a>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition-colors duration-300 ${
            scrolled
              ? "text-white hover:text-blue-300"
              : "text-blue-900 hover:text-blue-700"
          }`}
        >
          <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu (With Icons) */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md shadow-lg px-6 py-4 space-y-4 font-dmsans text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-lg hover:text-blue-300 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              <i className={`bi bi-${link.icon}`}></i>
              {link.name}
            </a>
          ))}

          <a
            href="#get-started"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center mt-4 px-5 py-2 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-800 hover:text-white transition-all"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
