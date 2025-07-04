import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";
// import RecipeCard from "../components/RecipeCard";

const Favroite = () => {
    const { fav } = useContext(recipecontext);



    //  const favrender =fav?.map((f)=> <RecipeCard key={f.id} recipes={f}/>);

    return (
        // <div className="flex flex-wrap ">
        //     {fav.length > 0 ? favrender : "Recipe Not found..."}
        // </div>
         <div>
      <h1 className="text-5xl text-red-600 flex justify-center items-center animate-pulse h-[500px]">
        coming Soon!
      </h1>
    </div>
    );
};

export default Favroite;