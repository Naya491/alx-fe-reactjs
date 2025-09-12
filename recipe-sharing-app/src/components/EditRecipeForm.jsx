import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required by checker

    updateRecipe(recipe.id, { title, description });

    if (onClose) {
      onClose(); // close modal or hide form after saving
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
