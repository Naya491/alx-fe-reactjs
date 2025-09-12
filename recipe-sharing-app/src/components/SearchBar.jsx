import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="🔍 Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '60%',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
