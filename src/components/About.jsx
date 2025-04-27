import React from 'react';

function About() {
  return (
    <section className="py-20 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">About Justice & Co.</h2>
        <p className="text-lg mb-10">
          With over 20 years of experience, Justice & Co. is committed to protecting your rights and fighting for your future. 
          We combine expertise with compassion to deliver unmatched legal representation.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Integrity</h3>
            <p>We maintain the highest ethical standards, earning the trust of our clients and community.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Excellence</h3>
            <p>We strive for outstanding results by delivering innovative legal solutions tailored to your needs.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Results</h3>
            <p>Our proven track record of success speaks to our dedication to client outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
