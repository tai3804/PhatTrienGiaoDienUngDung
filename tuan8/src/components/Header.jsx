import React from "react";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header className="bg-white w-full shadow-sm ">
      {/* Nav container */}
      <div className="mx-auto  px-4 flex items-center justify-between h-16">
        {/* Left: Logo + brand name */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img
            src="src/img/Chefify.png"
            alt="Chefify Logo"
          />
          {/* Brand name */}
        </div>

        {/* Middle: Search bar */}
        <div className="hidden lg:flex  items-center bg-gray-100 rounded-full px-3 py-1 w-1/5">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="bg-transparent focus:outline-none w-full"
          />
        </div>

        {/* Right: Navigation links + Buttons */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav links */}
          <nav className="flex gap-4 text-gray-600 font-medium">
            <a href="#!" className="hover:text-pink-600 transition-colors">
              Watchbook
            </a>
            <a href="#!" className="hover:text-pink-600 transition-colors">
              Recipes
            </a>
            <a href="#!" className="hover:text-pink-600 transition-colors">
              Ingredients
            </a>
            <a href="#!" className="hover:text-pink-600 transition-colors">
              Occasions
            </a>
            <a href="#!" className="hover:text-pink-600 transition-colors">
              About Us
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-pink-600 font-medium px-4 py-2 rounded-md hover:bg-pink-50 transition-colors">
              Login
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;
