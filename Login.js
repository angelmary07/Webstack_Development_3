// src/pages/Login.js
import React, { useState, useRef } from 'react';
import { Alert, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  // Sign Up form state
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  // Sign In form state
  const [signinData, setSigninData] = useState({ email: '', password: '' });

  const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });

  const signinRef = useRef(null);

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 3500);
  };

  const validateEmail = (email) => {
    return /^([a-zA-Z0-9._%-]+@gmail\.com)$/.test(email.trim());
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSigninChange = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = signupData;

    if (!name.trim()) return showAlert('danger', 'Please enter your name.');
    if (!email.trim()) return showAlert('danger', 'Please enter your email.');
    if (!validateEmail(email)) return showAlert('danger', 'Enter a valid Gmail address (e.g., user@gmail.com).');
    if (!password.trim()) return showAlert('danger', 'Please enter your password.');
    if (password.length < 6) return showAlert('danger', 'Password must be at least 6 characters.');

    // Simulate success (replace with real API call later)
    showAlert('success', 'Successfully signed up!');
    setSignupData({ name: '', email: '', password: '' });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const { email, password } = signinData;

    if (!email.trim()) return showAlert('danger', 'Please enter your email.');
    if (!validateEmail(email)) return showAlert('danger', 'Enter a valid Gmail address (e.g., user@gmail.com).');
    if (!password.trim()) return showAlert('danger', 'Please enter your password.');

    // Simulate success (replace with real auth later)
    showAlert('success', 'Successfully signed in!');
    setSigninData({ email: '', password: '' });
    // Redirect example: navigate('/')
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    showAlert('success', 'Password recovery is coming soon.');
  };

  return (
    <>
      {/* <Navbar />  ← Your shared Navbar */}

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
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80"
            alt="Community Portal Promo"
            style={{ width: '100%', display: 'block', borderRadius: '18px' }}
          />
        </div>

        <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: 'calc(85vh - 210px)' }}>
          <div
            className="auth-container"
            style={{
              width: '400px',
              background: '#fbe9cf',
              borderRadius: '18px',
              boxShadow: '0 8px 42px #dcbf9963, 0 1px 7px #ffd47e38',
              padding: '38px 32px 32px',
            }}
          >
            {alert.show && (
              <Alert
                variant={alert.type}
                onClose={() => setAlert({ ...alert, show: false })}
                dismissible
                className="mb-4 text-center"
                style={{
                  ...(alert.type === 'success'
                    ? { background: '#28c76f', color: '#fff', boxShadow: '0 3px 20px #28c76f22' }
                    : { background: '#e3242b', color: '#fff' }),
                }}
              >
                {alert.message}
              </Alert>
            )}

            {/* Sign Up Form */}
            <Form onSubmit={handleSignup} className="mb-5">
              <h1
                style={{
                  textAlign: 'center',
                  color: '#e3881d',
                  marginBottom: '18px',
                  letterSpacing: '1.5px',
                  fontWeight: '800',
                  fontFamily: 'Georgia',
                }}
              >
                Create Account
              </h1>

              <div className="social-container text-center mb-3">
                <a href="#" className="mx-2"><i className="fab fa-facebook-f fa-2x" style={{ color: '#e3881d' }}></i></a>
                <a href="#" className="mx-2"><i className="fab fa-google-plus-g fa-2x" style={{ color: '#e3881d' }}></i></a>
                <a href="#" className="mx-2"><i className="fab fa-linkedin-in fa-2x" style={{ color: '#e3881d' }}></i></a>
              </div>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  style={{
                    borderRadius: '2em',
                    border: '1.5px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 10px #ffd47e22 inset',
                    padding: '12px 16px',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  style={{
                    borderRadius: '2em',
                    border: '1.5px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 10px #ffd47e22 inset',
                    padding: '12px 16px',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  style={{
                    borderRadius: '2em',
                    border: '1.5px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 10px #ffd47e22 inset',
                    padding: '12px 16px',
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
                  padding: '0.73em 2.7em',
                  boxShadow: '0 2px 15px #ffd47e43, 0 4px 14px #f9ba6525',
                  fontSize: '1.18em',
                }}
              >
                Sign Up
              </Button>
            </Form>

            <div className="text-center mb-3" style={{ color: '#a55f17', fontWeight: 'bold', fontSize: '1.11em' }}>
              or
            </div>

            <div className="text-center mb-4">
              <button
                type="button"
                onClick={() => signinRef.current?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg
                  viewBox="0 0 48 48"
                  style={{
                    height: '41px',
                    width: '41px',
                    stroke: '#e3881d',
                    strokeWidth: '3.5',
                    fill: 'none',
                    filter: 'drop-shadow(0 2px 12px #ffd47e44)',
                    animation: 'classy-bounce 1.08s infinite alternate',
                  }}
                >
                  <polyline points="12,18 24,34 36,18" />
                </svg>
              </button>
            </div>

            {/* Sign In Form */}
            <div ref={signinRef}>
              <Form onSubmit={handleSignin}>
                <h1
                  style={{
                    textAlign: 'center',
                    color: '#e3881d',
                    marginBottom: '18px',
                    letterSpacing: '1.5px',
                    fontWeight: '800',
                    fontFamily: 'Georgia',
                  }}
                >
                  Sign In
                </h1>

                <div className="social-container text-center mb-3">
                  <a href="#" className="mx-2"><i className="fab fa-facebook-f fa-2x" style={{ color: '#e3881d' }}></i></a>
                  <a href="#" className="mx-2"><i className="fab fa-google-plus-g fa-2x" style={{ color: '#e3881d' }}></i></a>
                  <a href="#" className="mx-2"><i className="fab fa-linkedin-in fa-2x" style={{ color: '#e3881d' }}></i></a>
                </div>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signinData.email}
                    onChange={handleSigninChange}
                    style={{
                      borderRadius: '2em',
                      border: '1.5px solid #ffd47e',
                      background: '#ffefde',
                      color: '#87602a',
                      boxShadow: '0 2px 10px #ffd47e22 inset',
                      padding: '12px 16px',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signinData.password}
                    onChange={handleSigninChange}
                    style={{
                      borderRadius: '2em',
                      border: '1.5px solid #ffd47e',
                      background: '#ffefde',
                      color: '#87602a',
                      boxShadow: '0 2px 10px #ffd47e22 inset',
                      padding: '12px 16px',
                    }}
                  />
                </Form.Group>

                <div className="text-end mb-3">
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    style={{ color: '#c99843', textDecoration: 'underline', fontSize: '1.07em' }}
                  >
                    Forgot your password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    background: 'linear-gradient(90deg, #ffeacb 0%, #ffd47e 100%)',
                    color: '#6f412d',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '2em',
                    padding: '0.73em 2.7em',
                    boxShadow: '0 2px 15px #ffd47e43, 0 4px 14px #f9ba6525',
                    fontSize: '1.18em',
                  }}
                >
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </Container>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Login;