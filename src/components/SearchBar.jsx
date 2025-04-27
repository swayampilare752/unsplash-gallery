import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-1/2 rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
