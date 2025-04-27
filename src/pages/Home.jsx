import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555374018-13a8994ab246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-white p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-down">
            Justice & Co.
          </h1>
          <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">
            Your Trusted Legal Partners for Every Situation
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 animate-fade-in-up">
              Request a Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 animate-fade-in-up">
            About Justice & Co.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed animate-fade-in-up">
            At Justice & Co., we are committed to providing exceptional legal representation tailored to your needs. 
            With decades of combined experience, our team ensures your rights are protected with integrity, excellence, and professionalism.
          </p>
          <Link to="/about">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 animate-fade-in-up">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
