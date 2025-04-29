import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 text-center min-h-[90vh]">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fadeIn leading-tight">
          Your Trusted <span className="text-yellow-300">Legal Partner</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 animate-fadeIn delay-100 text-white/90">
          At Justice & Co., we combine deep legal expertise with a client-first approach to ensure every case gets the attention it deserves.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-300 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 animate-fadeIn delay-200"
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}

export default Hero;
