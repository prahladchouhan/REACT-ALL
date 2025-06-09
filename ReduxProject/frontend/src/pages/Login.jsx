import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncloginuser } from "../store/actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const LoginHandle = (user) => {
    dispatch(asyncloginuser(user));
    toast.success("Login Suucessfully!");
    navigate("/");
  };
  return (
    <div>
      <div className=" mt-20 flex items-center  justify-center bg-gray-900 text-white">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          <form onSubmit={handleSubmit(LoginHandle)} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
          <span className="text-gray-600">
            Create new Account?{" "}
            <NavLink to={"/register"} className="text-blue-500">
              register
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
