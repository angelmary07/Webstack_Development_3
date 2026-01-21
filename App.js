// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';           // Combined Login + Sign Up
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Complaints from './pages/Complaints';
import Contact from './pages/Contact';
import RatingStatistics from './pages/RatingStatistics';
// import Search from './pages/Search';      // Uncomment if you implemented it

// Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 app-wrapper">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow-1 py-4">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<AboutUs />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} /> {/* Same component handles both */}

            {/* Core Features */}
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/contact" element={<Contact />} />

            {/* Statistics & Rating */}
            <Route path="/ratings" element={<RatingStatistics />} />
            <Route path="/stats" element={<RatingStatistics />} /> {/* Alias */}

            {/* Optional Search Page */}
            {/* <Route path="/search" element={<Search />} /> */}

            {/* Fallback for unknown routes → redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;