import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Complaints from './pages/Complaints';
import Contact from './pages/Contact';
import RatingStatistics from './pages/RatingStatistics';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ratings" element={<RatingStatistics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
