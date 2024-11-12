import React from "react";
import { NavLink } from "react-router-dom";
import { Play, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90  backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <NavLink to="/" className="flex items-center space-x-2">
            <Play className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600">VStream</span>
          </NavLink>
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/login"
              className="ml-2 inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              <span>Log In</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
