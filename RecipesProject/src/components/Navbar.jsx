import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex align-middle justify-center gap-x-5 p-5 font-semibold">
      <NavLink className={(e)=>e.isActive ? "text-red-400" :""} to="/">
        Home
      </NavLink>
      <NavLink className={(e)=>e.isActive ? "text-red-400" :""} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e)=>e.isActive ? "text-red-400" :""} to="/about">
        About
      </NavLink>
      <NavLink className={(e)=>e.isActive ? "text-red-400" :""} to="/create">
        CreateRecipe
      </NavLink>
    </div>
  );
};

export default Navbar;
