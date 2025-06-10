import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { asynclogoutuser } from "../store/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   

  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  };
  return (
    <div className="h-16 bg-gray-800 text-white flex items-center justify-center shadow-md">
      <nav className="flex items-center gap-x-6 text-lg font-medium">
        <NavLink to="/" className="hover:text-blue-400 transition">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-blue-400 transition">
          Products
        </NavLink>

    
            <NavLink to="/admin/create-product">Create Product</NavLink>
            <button onClick={LogoutHandler}>Logout</button>
           
          
            <NavLink to="/login" className="hover:text-blue-400 transition">
              Login
            </NavLink>
         
      </nav>
    </div>
  );
};

export default Navbar;
