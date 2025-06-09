import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./pages/Login";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();

  return (
    <div>
      <div className=" mt-20 flex items-center  justify-center bg-gray-900 text-white">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

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

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Register
            </button>
          </form>
          <span className="text-gray-600">
            Already Have Account?{" "}
            <NavLink to={"/login"} className="text-blue-500">
              login
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
