import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

// 👇 Separate component for managing content based on login
function AppContent({ user, setUser, handleLogout, showLogin, setShowLogin }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Fake 0.5s loading
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar user={user} handleLogout={handleLogout} />
      <div className="pt-20 font-sans text-gray-800">
        <Routes>
          {/* Always Public */}
          <Route path="/about" element={<About />} />

          {!user ? (
            <>
              {/* Only when not logged in */}
              <Route path="/login" element={<Login setUser={setUser} toggleView={() => setShowLogin(false)} />} />
              <Route path="/register" element={<Register toggleView={() => setShowLogin(true)} />} />
              <Route path="*" element={<Navigate to={showLogin ? "/login" : "/register"} />} />
            </>
          ) : (
            <>
              {/* Only when logged in */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

// 👇 Main App
function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ email: 'user@example.com' }); // Simulate user logged-in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setShowLogin(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent 
        user={user} 
        setUser={setUser} 
        handleLogout={handleLogout} 
        showLogin={showLogin} 
        setShowLogin={setShowLogin} 
      />
    </Router>
  );
}

export default App;
