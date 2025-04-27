import { FaGavel, FaBalanceScale, FaUserShield } from 'react-icons/fa';

function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
        <p className="text-gray-600">We provide expert legal support in various fields.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        
        {/* Service 1 */}
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
          <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center hover:scale-110 transition-transform duration-300">
            <FaGavel />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Criminal Defense</h3>
          <p className="text-gray-500">Expert representation in criminal cases with a proven track record of success.</p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
          <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center hover:scale-110 transition-transform duration-300">
            <FaBalanceScale />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Civil Litigation</h3>
          <p className="text-gray-500">Dedicated support for resolving civil disputes efficiently and effectively.</p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
          <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center hover:scale-110 transition-transform duration-300">
            <FaUserShield />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Family Law</h3>
          <p className="text-gray-500">Compassionate guidance through divorce, custody, and family matters.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;
