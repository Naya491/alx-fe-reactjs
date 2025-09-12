import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) => state.recipes);

  // If no search term, fall back to all recipes
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
            {/* Wrap recipe title with Link */}
            <h3>
              <Link
                to={`/recipes/${recipe.id}`}
                style={{ textDecoration: "none", color: "blue" }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
