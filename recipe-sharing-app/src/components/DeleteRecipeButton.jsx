import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // ✅ go back to home after deleting
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        marginTop: '10px',
        cursor: 'pointer',
        borderRadius: '4px',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
