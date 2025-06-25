import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <div className="h-16 bg-gray-800 text-white flex items-center justify-center shadow-md">
      <nav className="flex items-center gap-x-6 text-lg font-medium">
        <NavLink to="/" className="hover:text-blue-400 transition">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-blue-400 transition">
          Products
        </NavLink>

        {user ? (
          <>
            {user && user?.isAdmin && (
              <NavLink
                to="/admin/create-product"
                className="hover:text-blue-400 transition">
                Create Product
              </NavLink>
            )}
            <NavLink
              to="/admin/user-profile"
              className="hover:text-blue-400 transition"
            >
              Settings
            </NavLink>
             <NavLink
              to="/cart"
              className="hover:text-blue-400 transition"
            >
              Cart
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="hover:text-blue-400 transition">
              Login
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
