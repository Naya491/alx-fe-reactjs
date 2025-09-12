import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: '#ff6b6b', color: 'white', border: 'none', padding: '8px 10px', cursor: 'pointer', marginLeft: '8px' }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
