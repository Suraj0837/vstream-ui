import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Play, User, LogOut, Upload, Settings } from "lucide-react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = true; // For demo purposes

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <NavLink to="/" className="flex items-center space-x-2">
            <Play className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600">VStream</span>
          </NavLink>
          <div className="flex items-center space-x-1">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-100">
                    <NavLink
                      to="/user"
                      className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </NavLink>
                    <button
                      onClick={() => {}}
                      className="w-full text-left  px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className="ml-2 inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                <span>Log In</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
