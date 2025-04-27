import React, { useState } from 'react';

const Login = ({ setUser, toggleView }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      setUser(data.user);
      setStatus('Login successful');
    } else {
      setStatus(data.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
        {status && <p className="mt-6 text-center text-sm text-red-600">{status}</p>}

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button onClick={toggleView} className="text-blue-600 hover:underline font-semibold">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
