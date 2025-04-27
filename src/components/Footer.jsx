import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-12">
      <div className="flex justify-center space-x-6 mb-4 text-blue-800 text-2xl">
        <a href="#" className="hover:text-blue-500 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-blue-500 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-500 transition">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-blue-500 transition">
          <FaInstagram />
        </a>
      </div>
      
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Justice & Co. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
