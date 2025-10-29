import React, { useState } from 'react';

function SearchBox({ onSearch, loading, error }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City"
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" />
          ) : (
            'Search'
          )}
        </button>
      </div>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
}

export default SearchBox;
