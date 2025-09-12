import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '6px',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to={`/recipes/${recipe.id}`}>View</Link>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                style={{ background: '#ff6b6b', color: 'white', border: 'none', padding: '6px 8px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
