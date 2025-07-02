import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("recipes")) || []
  );

  const [fav, setfav] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  console.log(data);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
