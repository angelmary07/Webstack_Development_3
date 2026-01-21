// src/pages/Services.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';

function Services() {
  const [formData, setFormData] = useState({
    serviceType: 'Clubhouse',
    dateService: '',
    detailsService: '',
  });

  const [confirmation, setConfirmation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.dateService) {
      alert('Please select a preferred date');
      return;
    }

    // Simulate booking success
    setConfirmation(
      `Service booked: ${formData.serviceType} for ${formData.dateService}. ` +
      (formData.detailsService ? `Details: ${formData.detailsService}` : '') +
      ' Our team will reach out soon!'
    );
    setShowSuccess(true);

    // Reset form
    setFormData({
      serviceType: 'Clubhouse',
      dateService: '',
      detailsService: '',
    });

    // Auto-hide success message after 8 seconds
    setTimeout(() => setShowSuccess(false), 8000);
  };

  return (
    <>
      {/* <Navbar />  ← Use your shared Navbar component */}

      <div style={{ background: 'linear-gradient(120deg, #fbe9cf 0%, #ffd47e 100%)', minHeight: '100vh' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '30px auto 0 auto',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 2px 28px #FFDEB9',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80"
            alt="Community Portal Promo"
            style={{ width: '100%', display: 'block', borderRadius: '18px' }}
          />
        </div>

        <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: 'calc(86vh - 210px)' }}>
          <Card
            className="auth-container shadow-lg"
            style={{
              width: '670px',
              background: '#fbe9cf',
              borderRadius: '22px',
              boxShadow: '0 8px 42px #dcbf9963, 0 1px 7px #ffd47e38',
              padding: '66px 52px 54px',
            }}
          >
            <Card.Body>
              <h1
                style={{
                  textAlign: 'center',
                  color: '#e3881d',
                  marginBottom: '28px',
                  letterSpacing: '1.5px',
                  fontWeight: '800',
                  fontFamily: 'Georgia',
                  fontSize: '2.8em',
                }}
              >
                Book a Community Service
              </h1>

              {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible className="mb-4">
                  {confirmation}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label
                    style={{
                      color: '#a55f17',
                      fontWeight: '700',
                      fontSize: '1.25em',
                      fontFamily: 'Poppins',
                    }}
                  >
                    Choose Service:
                  </Form.Label>
                  <Form.Select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '2.3em',
                      border: '1.5px solid #ffd47e',
                      color: '#87602a',
                      background: '#ffefde',
                      boxShadow: '0 2px 14px #ffd47e22 inset',
                      padding: '18px 26px',
                      fontSize: '1.28em',
                    }}
                  >
                    <option value="Clubhouse">Clubhouse</option>
                    <option value="Gym">Gym</option>
                    <option value="Swimming Pool">Swimming Pool</option>
                    <option value="Party Hall">Party Hall</option>
                    <option value="Maintenance">Maintenance/Repairs</option>
                    <option value="Security">Security Request</option>
                    <option value="Community Event">Community Event</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label
                    style={{
                      color: '#a55f17',
                      fontWeight: '700',
                      fontSize: '1.25em',
                      fontFamily: 'Poppins',
                    }}
                  >
                    Preferred Date:
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="dateService"
                    value={formData.dateService}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '2.3em',
                      border: '1.5px solid #ffd47e',
                      color: '#87602a',
                      background: '#ffefde',
                      boxShadow: '0 2px 14px #ffd47e22 inset',
                      padding: '18px 26px',
                      fontSize: '1.28em',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label
                    style={{
                      color: '#a55f17',
                      fontWeight: '700',
                      fontSize: '1.25em',
                      fontFamily: 'Poppins',
                    }}
                  >
                    Extra Details:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="detailsService"
                    rows={3}
                    placeholder="Ex: timings, specific requirements"
                    value={formData.detailsService}
                    onChange={handleChange}
                    style={{
                      borderRadius: '2.3em',
                      border: '1.5px solid #ffd47e',
                      color: '#87602a',
                      background: '#ffefde',
                      boxShadow: '0 2px 14px #ffd47e22 inset',
                      padding: '18px 26px',
                      fontSize: '1.28em',
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    background: 'linear-gradient(90deg, #ffeacb 0%, #ffd47e 100%)',
                    color: '#6f412d',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '2.1em',
                    fontSize: '1.32em',
                    padding: '1em 0',
                    boxShadow: '0 2px 28px #ffd47e43, 0 4px 18px #f9ba6525',
                  }}
                >
                  Request Service
                </Button>
              </Form>

              <div className="mt-5">
                <h3
                  style={{
                    color: '#a55f17',
                    fontFamily: 'Georgia',
                    fontSize: '1.28em',
                    marginBottom: '1.5rem',
                  }}
                >
                  Available Services
                </h3>
                <ul
                  style={{
                    fontSize: '1.14em',
                    lineHeight: '2.15',
                    color: '#87602a',
                    fontFamily: "'Poppins', Georgia, serif",
                    paddingLeft: '1.5rem',
                  }}
                >
                  <li><b>Clubhouse Booking:</b> Hassle-free reservations for your private/community events.</li>
                  <li><b>Gym Access:</b> Train anytime with secured entry, instant slot updates.</li>
                  <li><b>Swimming Pool:</b> Member-only scheduling for privacy and safety.</li>
                  <li><b>Party Hall:</b> Reserve for parties/functions with advanced calendar syncing.</li>
                  <li><b>Maintenance & Repairs:</b> Fast request/response from trusted staff.</li>
                  <li><b>Security Requests:</b> Visitor passes and emergency services at a click.</li>
                  <li><b>Community Events:</b> Join activities, festivals, and club meetings online.</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Services;