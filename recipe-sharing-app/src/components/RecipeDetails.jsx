import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <Link to="/">← Back</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit</h3>
      <EditRecipeForm recipe={recipe} />

      <div style={{ marginTop: '12px' }}>
        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
