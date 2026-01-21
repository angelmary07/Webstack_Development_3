// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <>
      {/* <Navbar />  ← Your shared Navbar component goes here */}

      <div
        className="hero"
        style={{
          background: 'linear-gradient(135deg, #fbe9cf 0%, #ffd47e 100%)',
          textAlign: 'center',
          padding: '120px 20px 80px',
          color: '#432a1b',
        }}
      >
        <Container>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#e3881d', marginBottom: '1.5rem' }}>
            The Heart of Luxury Community Living
          </h1>
          <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
            Build extraordinary community experiences with the Elite Resident Portal.
            <br />
            Discover smart booking, vibrant events, trusted management & seamless living—All in one beautifully crafted digital home.
          </p>
          <Link
            to="/services"
            className="cta-btn btn btn-lg"
            style={{
              background: 'linear-gradient(90deg, #ffeacb 0%, #ffd47e 100%)',
              color: '#6f412d',
              fontWeight: '700',
              padding: '14px 40px',
              borderRadius: '50px',
              boxShadow: '0 4px 20px #ffd47e99',
              textDecoration: 'none',
              fontSize: '1.3rem',
            }}
          >
            <i className="fas fa-arrow-right me-2"></i> Explore Services
          </Link>
        </Container>
      </div>

      <section className="features-section py-5" style={{ background: '#fffbe6' }}>
        <Container>
          <h2
            style={{
              textAlign: 'center',
              color: '#e3881d',
              fontSize: '2.8rem',
              fontWeight: '800',
              marginBottom: '3rem',
            }}
          >
            Why Residents Love Elite
          </h2>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="feature-card text-center h-100 shadow-sm border-0" style={{ background: '#ffefde', borderRadius: '18px', padding: '2rem' }}>
                <Card.Body>
                  <span className="feature-icon" style={{ fontSize: '3.5rem', color: '#e3881d' }}>
                    <i className="fas fa-key"></i>
                  </span>
                  <h5 style={{ fontWeight: 'bold', color: '#6f412d', margin: '1rem 0' }}>
                    Seamless Facility Booking
                  </h5>
                  <p style={{ color: '#87602a' }}>
                    Reserve pools, gyms, and event halls with a click—frictionless, anytime, anywhere.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="feature-card text-center h-100 shadow-sm border-0" style={{ background: '#ffefde', borderRadius: '18px', padding: '2rem' }}>
                <Card.Body>
                  <span className="feature-icon" style={{ fontSize: '3.5rem', color: '#e3881d' }}>
                    <i className="fas fa-users-cog"></i>
                  </span>
                  <h5 style={{ fontWeight: 'bold', color: '#6f412d', margin: '1rem 0' }}>
                    Smart Issue Resolution
                  </h5>
                  <p style={{ color: '#87602a' }}>
                    Raise, track, and resolve complaints efficiently for a stress-free lifestyle.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="feature-card text-center h-100 shadow-sm border-0" style={{ background: '#ffefde', borderRadius: '18px', padding: '2rem' }}>
                <Card.Body>
                  <span className="feature-icon" style={{ fontSize: '3.5rem', color: '#e3881d' }}>
                    <i className="fas fa-calendar-check"></i>
                  </span>
                  <h5 style={{ fontWeight: 'bold', color: '#6f412d', margin: '1rem 0' }}>
                    Community Events Hub
                  </h5>
                  <p style={{ color: '#87602a' }}>
                    Keep up with movie nights, parties, meetings & more—all collaborative and engaging.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="feature-card text-center h-100 shadow-sm border-0" style={{ background: '#ffefde', borderRadius: '18px', padding: '2rem' }}>
                <Card.Body>
                  <span className="feature-icon" style={{ fontSize: '3.5rem', color: '#e3881d' }}>
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h5 style={{ fontWeight: 'bold', color: '#6f412d', margin: '1rem 0' }}>
                    Security & Privacy First
                  </h5>
                  <p style={{ color: '#87602a' }}>
                    Enjoy safe, private digital access and real-time updates with encrypted protection.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonial-section py-5" style={{ background: 'linear-gradient(135deg, #fbe9cf, #ffefde)' }}>
        <Container className="text-center">
          <div
            className="testimonial-quote"
            style={{
              fontSize: '1.8rem',
              fontStyle: 'italic',
              maxWidth: '900px',
              margin: '0 auto 1.5rem',
              color: '#6f412d',
              lineHeight: '1.6',
            }}
          >
            “This portal transformed how our residents connect, celebrate, and solve.
            Booking, billing, events—all luxurious, all digital. We love Elite Community!”
          </div>
          <div className="testimonial-author" style={{ fontSize: '1.3rem', color: '#e3881d', fontWeight: '600' }}>
            — Priya Nair, Resident & Events Coordinator
          </div>
        </Container>
      </section>

      {/* <Footer />  ← Your shared Footer component goes here */}
    </>
  );
}
import { createRoot } from 'react-dom/client';
import App from './App1.jsx';   // or ./App
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default Home;