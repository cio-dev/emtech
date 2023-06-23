import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/cafaLogo.png";

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarOpen &&
      sliderRef.current &&
      !sliderRef.current.contains(event.target)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-10 bg-slate-300 font-bold text-slate-900">
      <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-30 mr-1"
          />
        </a>
        <div className="flex flex-col">
          <div className="font-bold text-5xl text-red-700">
            <a href="/">TUP</a>
          </div>
          <div className="ml-1 text-lg text-4xl text-red-700">
            <a href="/">CAFA</a>
          </div>
        </div>
        <NavLink
          to="/menu"
          className="ml-10 text-xl hover:text-red-700">
          About CAFA
        </NavLink>

        <NavLink
          to="/news"
          className="ml-10 text-xl hover:text-red-700">
          News
        </NavLink>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-3 mr-1 bg-gray-300 text-white rounded-full border border-black"
        />
        {/* Hamburger menu */}
        <div
          className="ml-4 cursor-pointer"
          onClick={handleSidebarToggle}>
          <div className="w-6 h-px bg-black mb-1"></div>
          <div className="w-6 h-px bg-black mb-1"></div>
          <div className="w-6 h-px bg-black"></div>
        </div>
      </div>

      {/* Slider */}
      {sidebarOpen && (
        <div
          ref={sliderRef}
          className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg">
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold mb-4 bg-slate-900"></h3>
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={handleSidebarToggle}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* @Henry, dito mo i work yung hamburger menu, nasa CSS file na yung need mo */}
          <div className="container">
            <div className="overflow-y-auto max-h-screen-2/3">
              <p>
                <a href="/">About</a>
              </p>
              <p>
                <a href="/">News</a>
              </p>
              <p>
                <a href="/">Faculty & Staff</a>
              </p>
              <p>
                <a href="/">Organization</a>
              </p>
              <p>
                <a href="/">Programs</a>
              </p>
              <p>
                <a href="/">Activities</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
