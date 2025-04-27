import React, { useState } from 'react';
import Swal from 'sweetalert2'; // 👈 Import SweetAlert2

const Register = ({ toggleView }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

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
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Input',
        text: 'Please enter a valid name, Gmail address, and password (6+ characters).',
      });
      return;
    }

    try {
      const res = await fetch('https://law-firm-backend-le55.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You can now log in to your account.',
        });
        toggleView(); // Switch to login view
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: data.msg || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Something went wrong. Please try again later.',
      });
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
            required
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email Address (@gmail.com only)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password (6+ characters)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>

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
