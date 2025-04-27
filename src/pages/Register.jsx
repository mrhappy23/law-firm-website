import React, { useState } from 'react';

const Register = ({ toggleView }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
  const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})?$/;
  const emailRegex = /^[\w-\.]+@gmail\.com$/;
  const passwordValid = formData.password.length >= 6;
  return nameRegex.test(formData.name) && emailRegex.test(formData.email) && passwordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('Invalid input. Check name, email, or password.');
      return;
    }
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus('Registration successful. Please log in.');
      toggleView();
    } else {
      setStatus(data.msg || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-100 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email Address (@gmail.com only)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password (6+ characters)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>
        {status && <p className="mt-6 text-center text-sm text-red-600">{status}</p>}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={toggleView} className="text-blue-600 hover:underline font-semibold">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
