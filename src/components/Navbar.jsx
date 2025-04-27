import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ user, handleLogout }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-blue-800">Justice & Co.</span>
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
        {user ? (
          <>
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-800 transition border-b-2 border-transparent hover:border-blue-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-800 transition border-b-2 border-transparent hover:border-blue-800"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="hover:text-blue-800 transition border-b-2 border-transparent hover:border-blue-800"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className="hover:text-blue-800 transition border-b-2 border-transparent hover:border-blue-800"
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-blue-800 transition border-b-2 border-transparent hover:border-blue-800"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
              >
                Admin
              </Link>
            </li>
            <li>
              <button 
                onClick={handleLogout} 
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link 
                to="/login" 
                className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
