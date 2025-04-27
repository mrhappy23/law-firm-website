import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
        Your Trusted Legal Partner
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8 animate-fadeIn delay-100">
        Justice & Co. delivers expert legal solutions with passion, precision, and professionalism.
      </p>
      <Link 
        to="/contact" 
        className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 animate-fadeIn delay-200"
      >
        Get a Consultation
      </Link>
    </section>
  );
}

export default Hero;
