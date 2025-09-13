import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  const recipesToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToShow.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No recipes found.
        </p>
      ) : (
        recipesToShow.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>👀 View Details</Link>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addFavorite(recipe.id)}
            >
              ⭐ Favorite
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
