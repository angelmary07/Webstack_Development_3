// src/pages/Contact.js
import React, { useState } from 'react';
import { Alert, Container, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Simulate sending (replace with real fetch/axios to backend)
    // Example:
    // fetch('https://your-api.com/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    //   .then(() => { ... })
    //   .catch(() => { ... });

    // Show success message
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <>
      {/* <Navbar />  ← Use your shared Navbar component */}

      <div
        className="contact-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 190px)',
          background: 'linear-gradient(120deg, #fbe9cf 0%, #ffd47e 100%)',
        }}
      >
        <Card
          className="contact-box shadow-lg"
          style={{
            background: '#fffbe6',
            padding: '56px 50px 42px',
            borderRadius: '22px',
            maxWidth: '540px',
            minWidth: '370px',
            boxShadow: '0 10px 44px #ffd47e54, 0 2px 16px #ffe06623',
            color: '#87602a',
          }}
        >
          <Card.Body>
            <h2
              style={{
                color: '#e3881d',
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '2.16em',
                fontWeight: '800',
              }}
            >
              Contact Us
            </h2>

            {showSuccess && (
              <Alert
                variant="success"
                onClose={() => setShowSuccess(false)}
                dismissible
                className="mb-4"
                style={{
                  background: '#f3ffe0',
                  color: '#226718',
                  borderLeft: '7px solid #48d13d',
                  boxShadow: '0 2px 22px #48d13d40',
                }}
              >
                ✅ Your message has been sent. We'll reply soon!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label
                  style={{ color: '#a55f17', fontWeight: '700', fontSize: '1.13em' }}
                >
                  Your Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    padding: '16px 22px',
                    boxShadow: '0 2px 14px #ffd47e22 inset',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label
                  style={{ color: '#a55f17', fontWeight: '700', fontSize: '1.13em' }}
                >
                  Your Email:
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    padding: '16px 22px',
                    boxShadow: '0 2px 14px #ffd47e22 inset',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label
                  style={{ color: '#a55f17', fontWeight: '700', fontSize: '1.13em' }}
                >
                  Message:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    padding: '16px 22px',
                    boxShadow: '0 2px 14px #ffd47e22 inset',
                    minHeight: '90px',
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
                  borderRadius: '2em',
                  padding: '1em 0',
                  boxShadow: '0 2px 18px #ffd47e99, 0 4px 18px #f9ba6525',
                  fontSize: '1.21em',
                }}
              >
                Send Message
              </Button>
            </Form>

            <div
              className="contact-details mt-4 p-3"
              style={{
                background: '#ffefde',
                borderRadius: '14px',
                boxShadow: '0 2px 14px #ffd47e33 inset',
                color: '#87602a',
                fontSize: '1.07em',
                lineHeight: '2em',
              }}
            >
              <b>Admin Email:</b> elitecommunity@xyz.com<br />
              <b>Phone:</b> +91 91234 56789<br />
              <b>Office:</b> Elite Tower, Main Street, Bangalore
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* <Footer />  ← Use your shared Footer component */}
    </>
  );
}

export default Contact;