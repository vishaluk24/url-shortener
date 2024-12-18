import React, { useState } from 'react';
import axios from 'axios';
import './UrlShortenerForm.css'; // Import the CSS

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/shorten`,
        { originalUrl }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>URL Shortener</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter a URL to shorten"
            required
          />
          <button type="submit">Shorten URL</button>
        </form>
        {shortUrl && (
          <div style={{ marginTop: '20px' }}>
            <p>Shortened URL:</p>
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortenerForm;
