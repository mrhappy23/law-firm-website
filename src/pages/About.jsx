import React from 'react';

function About() {
  return (
    <section className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-blue-800 mb-6">About Justice & Co.</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Justice & Co. is a premier law firm committed to delivering outstanding legal services. 
          With decades of experience, we specialize in criminal defense, civil litigation, 
          family law, and corporate consulting. Our mission is to uphold justice and protect your rights with unwavering dedication.
        </p>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          
          {/* Mission */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide expert legal representation while maintaining the highest ethical standards.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted legal partner, offering innovative solutions for complex challenges.
            </p>
          </div>

          {/* Values */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Excellence, Compassion, Justice, and Service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
