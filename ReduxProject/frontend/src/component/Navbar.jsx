
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">DarkKart</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-x-6 text-lg font-medium">
          <NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink>
          <NavLink to="/products" className="hover:text-blue-400 transition">Products</NavLink>

          {user ? (
            <>
              {user?.isAdmin && (
                <NavLink to="/admin/create-product" className="hover:text-blue-400 transition">
                  Create Product
                </NavLink>
              )}
              <NavLink to="/admin/user-profile" className="hover:text-blue-400 transition">Settings</NavLink>
              <NavLink to="/cart" className="hover:text-blue-400 transition">Cart</NavLink>
            </>
          ) : (
            <NavLink to="/login" className="hover:text-blue-400 transition">Login</NavLink>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-y-2 text-lg font-medium">
            <NavLink to="/" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/products" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Products</NavLink>

            {user ? (
              <>
                {user?.isAdmin && (
                  <NavLink to="/admin/create-product" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>
                    Create Product
                  </NavLink>
                )}
                <NavLink to="/admin/user-profile" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Settings</NavLink>
                <NavLink to="/cart" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Cart</NavLink>
              </>
            ) : (
              <NavLink to="/login" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Login</NavLink>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
