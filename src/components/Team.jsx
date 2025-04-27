import React from 'react';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';

function Team() {
  const members = [
    { name: 'Sarah Johnson', role: 'Senior Attorney', img: team1 },
    { name: 'Michael Smith', role: 'Criminal Lawyer', img: team2 },
    { name: 'Laura Williams', role: 'Family Law Specialist', img: team3 },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 animate-fadeIn">Meet Our Team</h2>
        <p className="text-gray-600 text-lg">Experienced, passionate, and dedicated professionals.</p>
      </div>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 p-6">
        {members.map((member, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition">
            <img src={member.img} alt={member.name} className="h-80 w-full object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-700">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
