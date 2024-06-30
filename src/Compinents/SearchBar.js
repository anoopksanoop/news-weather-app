import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ setQuery, setLanguage }) => {
    const [inputQuery, setInputQuery] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en');

  const handleSearch = () => {
    setQuery(inputQuery);
    setLanguage(inputLanguage);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className=" col-md-8 col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Search for news..."
            />
            <select
              className="form-select"
              value={inputLanguage}
              onChange={(e) => setInputLanguage(e.target.value)}
              style={{ marginLeft: '8px' }}
            >
              <option value="en">English</option>
              <option value="ml">Malayalam</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add more languages as needed */}
            </select>
            <button
              className="btn btn-outline-primary"
              onClick={handleSearch}
              style={{ marginLeft: '8px' }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar