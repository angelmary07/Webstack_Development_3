// src/pages/Complaints.js
import React, { useState, useEffect } from 'react';
import { Alert, Container, Form, Button, Card } from 'react-bootstrap';

function Complaints() {
  const [formData, setFormData] = useState({
    name: '',
    apartment: '',
    category: 'maintenance',
    description: '',
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.apartment || !formData.description.trim()) {
      showMessage('error', 'Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('https://your-backend.com/api/submit-complaint', {
        // Replace with real endpoint (or use a mock like jsonplaceholder for testing)
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          apartment: formData.apartment,
          category: formData.category,
          description: formData.description,
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to submit complaint.';
        if (response.status === 400) errorMsg = 'Bad request — check your input.';
        if (response.status === 401) errorMsg = 'Please login first.';
        if (response.status === 404) errorMsg = 'Service not found.';
        if (response.status === 500) errorMsg = 'Server error — try again later.';
        throw new Error(errorMsg);
      }

      const data = await response.json(); // optional: if backend returns JSON

      showMessage('success', '✓ Complaint submitted successfully!');
      setFormData({
        name: '',
        apartment: '',
        category: 'maintenance',
        description: '',
      });
    } catch (err) {
      showMessage('error', err.message || 'Network error. Please check your connection.');
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setShowAlert(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {/* Use your shared Navbar component here instead of duplicating */}
      {/* <Navbar /> */}

      <div className="complaint-container" style={{ minHeight: 'calc(100vh - 190px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card className="complaint-box shadow-lg" style={{ background: '#fffbe6', padding: '56px 50px 42px', borderRadius: '22px', maxWidth: '540px', minWidth: '370px', boxShadow: '0 10px 44px #ffd47e54, 0 2px 16px #ffe06623', color: '#87602a' }}>
          <Card.Body>
            <h2 style={{ color: '#e3881d', textAlign: 'center', marginBottom: '20px', fontSize: '2.16em', fontWeight: '800' }}>
              Submit Your Complaint
            </h2>

            {showAlert && (
              <Alert
                variant={message.type === 'success' ? 'success' : 'danger'}
                onClose={() => setShowAlert(false)}
                dismissible
                className="mb-4"
              >
                {message.text}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Your Name:</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '2.2em', border: '1.6px solid #ffd47e', background: '#ffefde', color: '#87602a', padding: '16px 22px' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Apartment Number:</Form.Label>
                <Form.Control
                  type="text"
                  id="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '2.2em', border: '1.6px solid #ffd47e', background: '#ffefde', color: '#87602a', padding: '16px 22px' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Category:</Form.Label>
                <Form.Select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={{ borderRadius: '2.2em', border: '1.6px solid #ffd47e', background: '#ffefde', color: '#87602a', padding: '16px 22px' }}
                >
                  <option value="maintenance">Maintenance</option>
                  <option value="security">Security</option>
                  <option value="services">Services</option>
                  <option value="others">Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Complaint:</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '2.2em', border: '1.6px solid #ffd47e', background: '#ffefde', color: '#87602a', padding: '16px 22px', minHeight: '90px' }}
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
                  borderRadius: '2em',
                  padding: '1em 0',
                  boxShadow: '0 2px 18px #ffd47e99',
                }}
              >
                Submit Complaint
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      {/* Use your shared Footer component here */}
      {/* <Footer /> */}
    </>
  );
}

export default Complaints;