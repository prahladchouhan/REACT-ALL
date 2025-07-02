import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    const renderrecipes = data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}/>
    ));
  

    return (
        <>
      <div className="flex flex-wrap gap-6 px-4 py-8">
  {data.length > 0 ? (
    renderrecipes
  ) : (
    <p className="text-xl text-red-400 font-semibold bg-white px-6 py-4 rounded-xl shadow animate-pulse">
      🚫 No recipes found. Try a different search!
    </p>
  )}
</div>
        </>
        
    );
}

export default Recipes;
