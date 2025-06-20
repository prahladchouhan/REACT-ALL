import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../../store/actions/userAction";

const UserProfile = () => {
  const { users } = useSelector((state) => state.userReducer);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
  };

  const LogoutUserHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
  };

  return users ? (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-semibold text-blue-400 mb-2">
        {users.username}
      </h1>
      <h2 className="text-lg text-gray-300 mb-6">{users.email}</h2>
      <hr className="border-gray-700 mb-10" />
      <form
  onSubmit={handleSubmit(UpdateUserHandler)}
  className="flex flex-col gap-4"
>
  <input
    {...register("username")}
    className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    placeholder="John-Doe"
  />
  <input
    {...register("email")}
    className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="email"
    placeholder="john@doe.com"
  />
  <input
    {...register("password")}
    className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="password"
    placeholder="********"
  />

  {/* Buttons Block */}
  <div className="flex gap-3 mt-4 flex-wrap">
    {/* Update Button */}
    <button
      type="submit"
      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm px-4 py-2 rounded-md transition"
    >
      🛠️ Update
    </button>

    {/* Logout Button */}
    <button
      type="button"
      onClick={LogoutUserHandler}
      className="flex items-center gap-2 border border-yellow-400  text-yellow-300 hover:bg-yellow-500/10 text-sm px-4 py-2 rounded-md transition"
    >
      🚪 Logout
    </button>

    {/* Delete Button */}
    <button
      type="button"
      onClick={DeleteHandler}
      className="flex items-center gap-2 bg-red-600 to-red-500 hover:bg-red-800 text-white text-sm px-4 py-2 rounded-md transition"
    >
      🗑️ Delete
    </button>
  </div>
</form>

    </div>
  </div>
) : (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-xl">
    Loading...
  </div>
);
};

export default UserProfile;
