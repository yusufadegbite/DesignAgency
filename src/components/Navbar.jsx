import { useState } from "react";
import upArrow from '../assets/ep_arrow.png'

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[#D7F5DC] px-6 sm:px-10 md:px-16 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-bold text-xl text-gray-900">Design</span>
          <span className="font-bold text-xl text-orange-500">AGENCY</span>
        </div>

        {/* Hamburger for mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="flex items-center text-sm px-3 font-medium text-gray-700 hover:text-green-600">
              Services
              <span className="ml-1">
                <img src={upArrow} className="w-[20px] h-[20px]" alt="arrow-dropdown" />
              </span>
            </span>
            {servicesOpen && (
              <div className="absolute top-7 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-36 z-50">
                {["Web Design", "Branding", "Marketing"].map((item) => (
                  <div key={item} className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm px-4 font-medium text-gray-700 hover:text-green-600 cursor-pointer">About Us</span>
          <span className="text-sm px-4 font-medium text-gray-700 hover:text-green-600 cursor-pointer">Contact Us</span>
          <button className="px-5 py-1.5 mr-2 border-2 border-green-600 text-green-600 rounded-lg text-sm font-semibold hover:bg-green-600 hover:text-white transition-all">
            Login
          </button>
          <button className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-all">
            Register
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-4 border-t border-green-200 pt-4">
          <div
            className="relative"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <span className="text-sm font-medium text-gray-700 cursor-pointer flex items-center gap-1">
              Services <span className="text-xs">▼</span>
            </span>
            {servicesOpen && (
              <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                {["Web Design", "Branding", "Marketing"].map((item) => (
                  <div key={item} className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700 cursor-pointer hover:text-green-600">About Us</span>
          <span className="text-sm font-medium text-gray-700 cursor-pointer hover:text-green-600">Contact Us</span>
          <div className="flex gap-3 mt-2">
            <button className="flex-1 py-2 border-2 border-green-600 text-green-600 rounded-lg text-sm font-semibold hover:bg-green-600 hover:text-white transition-all">
              Login
            </button>
            <button className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-all">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}