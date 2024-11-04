import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); 
    setQuery(''); 
  };

  return (
    <form onSubmit={handleSearch} style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Buscar mangas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Buscar</button>
    </form>
  );
};

export default SearchBar;
