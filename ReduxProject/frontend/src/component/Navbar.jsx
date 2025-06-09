import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-gray-800 text-white flex items-center justify-center shadow-md">
      <nav className="flex items-center gap-x-6 text-lg font-medium">
        <NavLink to="/" className="hover:text-blue-400 transition">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-blue-400 transition">
          Products
        </NavLink>
        <NavLink to="/login" className="hover:text-blue-400 transition">
          Login
        </NavLink>
      
      </nav>
    </div>
  );
};

export default Navbar;
