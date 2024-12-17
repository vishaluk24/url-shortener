import React, { useState } from 'react';
import apiClient from '../api/apiClient';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter a URL to shorten"
          style={{ padding: '10px', marginRight: '10px' }}
          required
        />
        <button type="submit" style={{ padding: '10px' }}>Shorten URL</button>
      </form>
      {shortUrl && (
        <div style={{ marginTop: '20px' }}>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  );
};

export default UrlShortenerForm;