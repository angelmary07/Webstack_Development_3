// src/pages/Search.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Search() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const simulateSearch = async (searchQuery) => {
    setLoading(true);
    setError(null);
    setResult(null);

    // Simulate different responses based on query (for demo/lab purposes)
    // In real app → replace with actual fetch to your backend
    await new Promise(resolve => setTimeout(resolve, 800)); // fake network delay

    let status = 200;
    let responseText = `Found residents/facilities matching "${searchQuery}"`;

    // Simple simulation rules (you can expand or remove)
    if (searchQuery.toLowerCase().includes('error')) status = 500;
    if (searchQuery.toLowerCase().includes('notfound')) status = 404;
    if (searchQuery.toLowerCase().includes('forbidden')) status = 403;
    if (!searchQuery.trim()) status = 400;

    if (status === 200) {
      setResult({
        title: '200 OK – Request successful',
        message: responseText,
        type: 'success'
      });
    } else if (status === 404) {
      setResult({
        title: '404 Not Found',
        message: 'File or endpoint missing / No results found',
        type: 'danger'
      });
    } else if (status === 500) {
      setResult({
        title: '500 Internal Server Error',
        message: 'Server crashed or has bug',
        type: 'danger'
      });
    } else if (status === 403) {
      setResult({
        title: '403 Forbidden',
        message: 'Access denied',
        type: 'danger'
      });
    } else {
      setResult({
        title: 'Unknown Error',
        message: `Status: ${status}`,
        type: 'danger'
      });
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a search term');
      return;
    }
    simulateSearch(query);
  };

  return (
    <div
      style={{
        background: `url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover`,
        color: '#fff',
        minHeight: '100vh',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header / Navbar - use your shared component instead */}
      <header
        style={{
          background: 'rgba(21,30,65,0.98)',
          color: '#ffe066',
          padding: '20px 0 10px',
          borderRadius: '0 0 20px 20px',
          boxShadow: '0 3px 32px #23294633',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.3em', letterSpacing: '2px' }}>
          Community System
        </h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: '13px 0 0 0' }}>
            <li style={{ display: 'inline-block', margin: '0 9px' }}>
              <a href="/" style={{ color: '#ffe066', textDecoration: 'none', fontWeight: 600, padding: '7px 16px', borderRadius: '12px' }}>
                Home
              </a>
            </li>
            {/* Add other links similarly – or better: use your <Navbar /> component */}
            <li style={{ display: 'inline-block', margin: '0 9px' }}>
              <a href="/search" style={{ color: '#232946', background: '#ffe066', textDecoration: 'none', fontWeight: 600, padding: '7px 16px', borderRadius: '12px' }}>
                Search
              </a>
            </li>
            {/* ... other nav items */}
          </ul>
        </nav>
      </header>

      <Container className="py-5">
        <div
          className="search-box mx-auto"
          style={{
            background: 'rgba(0,0,0,0.70)',
            padding: '40px 25px 18px',
            borderRadius: '15px',
            maxWidth: '600px',
            boxShadow: '0 10px 40px #23294666, 0 2px 14px #ffe06627',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: '#ffe066', fontFamily: 'Georgia, serif', marginBottom: '19px' }}>
            Search Residents & Facilities
          </h2>

          <Form onSubmit={handleSubmit}>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter name, apartment no., contact..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: '#faf3ca',
                  color: '#232946',
                  fontSize: '1.08em',
                  flex: 1,
                }}
              />
              <Button
                type="submit"
                disabled={loading}
                style={{
                  background: 'linear-gradient(90deg, #fff7e1 0%, #ffe066 100%)',
                  color: '#232946',
                  border: 'none',
                  borderRadius: '7px',
                  fontWeight: 600,
                  fontSize: '1.07em',
                  boxShadow: '0 2px 8px #ffe06666',
                  padding: '10px 22px',
                  marginLeft: '8px',
                }}
              >
                <i className="fa fa-search me-2"></i>
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}

            {result && (
              <div
                className="gold-box mt-4"
                style={{
                  background: 'linear-gradient(120deg, #ffe066 80%, #232946 120%)',
                  color: '#232946',
                  borderRadius: '12px',
                  boxShadow: '0 2px 16px #151d2e44, 0 1px 7px #ffe06638',
                  padding: '12px 15px',
                  borderLeft: '6px solid #ffe066',
                  textAlign: 'left',
                }}
              >
                <div className="result-title" style={{ color: '#ffe066', fontSize: '1.1em', fontWeight: 600, marginBottom: '8px' }}>
                  {result.title}
                </div>
                <div>{result.message}</div>
              </div>
            )}
          </Form>
        </div>
      </Container>

      <footer
        style={{
          marginTop: '55px',
          textAlign: 'center',
          color: '#ffe066be',
          background: 'rgba(21,30,65,.91)',
          fontSize: '1.09rem',
          padding: '18px 0 10px',
          borderRadius: '18px 18px 0 0',
          boxShadow: '0 -2px 17px #23294644 inset',
        }}
      >
        <p>© 2025 Community Management System</p>
      </footer>
    </div>
  );
}

export default Search;