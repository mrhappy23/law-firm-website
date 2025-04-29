import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ user, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-blue-800">Justice & Co.</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          {user ? (
            <>
              <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-800">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-800">Services</Link></li>
              <li><Link to="/team" className="hover:text-blue-800">Team</Link></li>
              <li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-blue-500">Admin</Link></li>
              <li>
                <button onClick={handleLogout} className="text-red-600 hover:text-red-800">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
              <li><Link to="/register" className="hover:text-blue-500">Register</Link></li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-gray-700 font-medium text-center">
          {user ? (
            <>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <Link to="/services" onClick={closeMenu}>Services</Link>
              <Link to="/team" onClick={closeMenu}>Team</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              <Link to="/admin" onClick={closeMenu}>Admin</Link>
              <button onClick={() => { handleLogout(); closeMenu(); }} className="text-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu}>Login</Link>
              <Link to="/register" onClick={closeMenu}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
