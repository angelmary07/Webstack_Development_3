import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>Welcome to Elite Resident Portal</h1>
      <p>Your community hub for seamless living.</p>
      <div style={{ margin: '2rem 0' }}>
        <Link to="/signup" className="link" style={{ marginRight: '2rem', fontSize: '1.2rem' }}>
          Create Account
        </Link>
        <Link to="/login" className="link" style={{ fontSize: '1.2rem' }}>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Home;
