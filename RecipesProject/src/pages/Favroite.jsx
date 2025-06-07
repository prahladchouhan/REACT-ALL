import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";
import RecipeCard from "../components/RecipeCard";

const Favroite = () => {
    const { fav } = useContext(recipecontext);



     const favrender =fav?.map((f)=> <RecipeCard key={f.id} recipes={f}/>);

    return (
        <div className="flex flex-wrap ">
            {fav.length > 0 ? favrender : "Recipe Not found..."}
        </div>
    );
};

export default Favroite;