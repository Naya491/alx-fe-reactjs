import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);

    if (onDelete) {
      onDelete(); // optional callback (e.g. navigate back after delete)
    }
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

export default DeleteRecipeBu
