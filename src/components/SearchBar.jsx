import React from "react";
function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    // prevent the form from automatic submit
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">   
      <input 
        type="text" 
        placeholder="Search movies..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
    </form>
  );
}
export default SearchBar