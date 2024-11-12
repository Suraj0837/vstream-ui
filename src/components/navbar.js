import React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
import { Play, User } from "lucide-react";
>>>>>>> 6fa05e7 (Video-upload option added on UI)

function Navbar() {
  return (
<<<<<<< HEAD
    <nav class="flex px-4 border-b md:shadow-lg items-center fixed top-0 left-0 right-0">
      <div class="text-lg font-bold md:py-0 py-4">
        <NavLink to={"/"}>
          <a
            href="/"
            class="flex md:inline-flex p-4 items-center  cursor-pointer"
          >
            <span>VStream</span>
          </a>
        </NavLink>
      </div>
      <ul class="md:px-2 ml-auto md:flexgu md:space-x-2 absolute md:relative top-full left-0 right-0">
        <NavLink to={"/login"}>
          <li>
            <a
              href="/login"
              class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
=======
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
>>>>>>> 6f94e0f (Video-upload option added)
            >
<<<<<<< HEAD
              <span>Login</span>
            </a>
          </li>
        </NavLink>
      </ul>
      <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
>>>>>>> 413df8f (1st commit)
=======
              <span>Log In</span>
            </NavLink>
          </div>
        </div>
>>>>>>> 6fa05e7 (Video-upload option added on UI)
      </div>
    </nav>
  );
}

export default Navbar;
