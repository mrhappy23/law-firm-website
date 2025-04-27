import React from 'react';
import { FaGavel, FaBalanceScale, FaUserShield } from 'react-icons/fa';

function Services() {
  return (
    <section className="bg-gray-50 min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-blue-800 mb-6">Our Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          Comprehensive legal expertise tailored to your needs.
        </p>

        <div className="grid gap-12 md:grid-cols-3">

          {/* Service 1 */}
          <div className="bg-white p-10 rounded-3xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-6xl text-blue-700 mb-6">
              <FaGavel />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Criminal Defense</h3>
            <p className="text-gray-600">
              Aggressive representation in criminal cases, ensuring the protection of your rights with unwavering commitment.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-10 rounded-3xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-6xl text-blue-700 mb-6">
              <FaBalanceScale />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Civil Litigation</h3>
            <p className="text-gray-600">
              Strategic resolution of civil disputes with thorough case preparation and persuasive advocacy.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-10 rounded-3xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-6xl text-blue-700 mb-6">
              <FaUserShield />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Family Law</h3>
            <p className="text-gray-600">
              Compassionate guidance through sensitive family matters such as divorce, custody, and guardianship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
