import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setMessage('Please provide both title and description.');
      return;
    }
    updateRecipe({ ...recipe, title: title.trim(), description: description.trim() });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '12px' }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 12px' }}>
        Save Changes
      </button>
      {message && <div style={{ marginTop: '8px', color: 'green' }}>{message}</div>}
    </form>
  );
};

export default EditRecipeForm;
