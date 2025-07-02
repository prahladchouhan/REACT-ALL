// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="flex align-middle justify-center gap-x-5 p-5 mb-3 font-semibold">
//       <NavLink className={(e)=>e.isActive ? "text-red-400 " :"hover:border-b-2 duration-50"} to="/">
//         Home
//       </NavLink>
//       <NavLink className={(e)=>e.isActive ? "text-red-400 " :"hover:border-b-2 duration-50"} to="/recipes">
//         Recipes
//       </NavLink>
//       <NavLink className={(e)=>e.isActive ? "text-red-400 " :"hover:border-b-2 duration-50"} to="/about">
//         About
//         </NavLink>
//        <NavLink
//                 className={(e) => (e.isActive ? "text-red-400" : "")}
//                 to="/favroite"
//             >
//                 Favroite
//             </NavLink>

//       <NavLink className={(e)=>e.isActive ? "text-red-400 " :"hover:border-b-2 duration-50"} to="/create">
//         CreateRecipe
//       </NavLink>
      
//     </div>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = (e) =>
    e.isActive
      ? "text-red-400"
      : "hover:border-b-2 hover:border-red-400 transition duration-200";

  return (
    <nav className="p-4 mb-3 font-semibold border-b border-gray-300 dark:border-gray-600">
      {/* Top Bar with Menu Button */}
      <div className="flex items-center justify-between md:justify-start mb-2 md:mb-0">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden underline text-sm"
        >
          {open ? "Close Menu" : "Open Menu"}
        </button>
        <h1 className="hidden md:block text-lg ml-4 text-red-400">
          🍽️ RecipeApp
        </h1>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col items-start gap-3 md:flex md:flex-row md:items-center md:gap-x-6 md:ml-2`}
      >
        <NavLink className={linkClass} to="/">Home</NavLink>
        <NavLink className={linkClass} to="/recipes">Recipes</NavLink>
        <NavLink className={linkClass} to="/about">About</NavLink>
        <NavLink className={linkClass} to="/favroite">Favroite</NavLink>
        <NavLink className={linkClass} to="/create">CreateRecipe</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

