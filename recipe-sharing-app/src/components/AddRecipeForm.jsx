// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';



const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!title || !description) return;
  
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ margin: '20px', width: '100%', maxWidth: '400px' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{ display: 'block', width: '100%', margin: '10px 0', padding: '8px' }}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            style={{ display: 'block', width: '100%', margin: '10px 0', padding: '8px' }}
          />
          <button type="submit" style={{ display: 'block', marginTop: '10px', padding: '8px 12px' }}>
            Add Recipe
          </button>
        </form>
      </div>
    );
  };
  
  export default AddRecipeForm;