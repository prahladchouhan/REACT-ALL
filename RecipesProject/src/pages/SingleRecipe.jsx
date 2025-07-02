import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipesContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();

  const { data, setdata, fav, setfav } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      chef: recipe.chef,
      image: recipe.image,
      inst: recipe.inst,
      desc: recipe.desc,
      ingr: recipe.ingr,
      category: recipe.category,
    },
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated!");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("recipe deleted!");
    navigate("/recipes");
  };
  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");
    return () => {
      console.log("SingleRecipe.jsx Unmount");
    };
  }, []);

  const FavHandler = () => {
    const copyfav = [...fav];
    copyfav.push(recipe);
    setfav(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Added to Favroite!");
  };
  const UnFavHandler = () => {
    const favfilter = fav.filter((f) => f.id != id);
    setfav(favfilter);
    localStorage.setItem("fav", JSON.stringify(favfilter));
    toast.error("Removed from Favroite!");
  };

  // return recipe ? (
  //   <div className=" w-90% flex gap-0.5 m-5 p-2 ">
  //     <div className="left relative w-1/2 p-4  ">
  //       <h1 className="text-4xl font-black py-4  ">{recipe.title}</h1>
  //       {fav ?.find((f) => f.id == id) ? (
  //         <i
  //           onClick={UnFavHandler}
  //           className="absolute top-[2%] right-[5%] text-red-400 text-3xl ri-heart-fill"
  //         ></i>
  //       ) : (
  //         <i
  //           onClick={FavHandler}
  //           className="absolute top-[2%] right-[5%] text-red-400 text-3xl ri-heart-line"
  //         ></i>
  //       )};
        
  //       <img className="h-[40vh] w-100 rounded-3xl" src={recipe.image} alt="" />
  //       <h1 className="text-blue-950 font-bold p-4 border-b-2">
  //         Chef Name: {recipe.chef}
  //       </h1>
  //       <p className="px-2 pb-3 text-2xl">{recipe.desc}</p>
  //     </div>
  //     <div className="w-1/2 p-4 ">
  //       <form
  //         className=" p-5 border-2 rounded-4xl mx-30 "
  //         onSubmit={handleSubmit(SubmitHandler)}
  //       >
  //         <input
  //           className="block border-b outline-0  "
  //           {...register("image")}
  //           type="url"
  //           placeholder="Enter Image Url"
  //         />
  //         <small className="text-red-400">This is how the error is shown</small>
  //         <input
  //           className="block border-b outline-0 p-2"
  //           {...register("title")}
  //           type="text"
  //           placeholder="Recipe Title"
  //         />
  //         <input
  //           className="block border-b outline-0 p-2"
  //           {...register("chef")}
  //           type="text"
  //           placeholder="Chef Name"
  //         />

  //         <textarea
  //           className="block border-b outline-0 p-2"
  //           {...register("desc")}
  //           placeholder="//start from here"
  //         ></textarea>

  //         <textarea
  //           className="block border-b outline-0 p-2"
  //           {...register("ingr")}
  //           placeholder="//write ingredients seperated by comma"
  //         ></textarea>

  //         <textarea
  //           className="block border-b outline-0 p-2"
  //           {...register("inst")}
  //           placeholder="//write instructions seperated by comma"
  //         ></textarea>

  //         <select
  //           className="block border-b outline-0 p-2"
  //           {...register("category")}
  //         >
  //           <option value="breakfast">Breakfast</option>
  //           <option value="lunch">Lunch</option>
  //           <option value="supper">Supper</option>
  //           <option value="dinner">Dinner</option>
  //         </select>

  //         <div className="flex gap-10 font-medium text-amber-50">
  //           <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
  //             Update Recipe
  //           </button>
  //           <button
  //             onClick={DeleteHandler}
  //             className="mt-5 block bg-red-900 px-4 py-2 rounded"
  //           >
  //             Delete Recipe
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // ) : (
  //   "Loading..."
  // );

  return recipe ? (
  <div className="w-full flex flex-col lg:flex-row gap-6 p-4">
    {/* Left Side - Recipe Info */}
    <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-6 relative">
      {/* Favorite Heart Icon */}
      {fav?.find((f) => f.id == id) ? (
        <i
          onClick={UnFavHandler}
          className="absolute top-4 right-6 text-red-500 text-3xl ri-heart-fill cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={FavHandler}
          className="absolute top-4 right-6 text-red-500 text-3xl ri-heart-line cursor-pointer"
        ></i>
      )}

      <h1 className="text-3xl font-extrabold mb-4">{recipe.title}</h1>

      <img
        className="w-full h-[300px] object-cover rounded-xl mb-4"
        src={recipe.image}
        alt={recipe.title}
      />

      <h2 className="text-blue-950 font-semibold mb-2 border-b pb-2">
        👨‍🍳 Chef: {recipe.chef}
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed">{recipe.desc}</p>
    </div>

    {/* Right Side - Edit Form */}
    <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-6">
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">
        {/* Input Fields */}
        <div>
          <input
            {...register("image")}
            type="url"
            placeholder="Enter Image URL"
            className="w-full border-b px-3 py-2 outline-none"
          />
          <small className="text-red-400">This is how the error is shown</small>
        </div>

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full border-b px-3 py-2 outline-none"
        />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="w-full border-b px-3 py-2 outline-none"
        />

        <textarea
          {...register("desc")}
          placeholder="//start from here"
          className="w-full border-b px-3 py-2 outline-none resize-none"
        ></textarea>

        <textarea
          {...register("ingr")}
          placeholder="//write ingredients separated by comma"
          className="w-full border-b px-3 py-2 outline-none resize-none"
        ></textarea>

        <textarea
          {...register("inst")}
          placeholder="//write instructions separated by comma"
          className="w-full border-b px-3 py-2 outline-none resize-none"
        ></textarea>

        <select
          {...register("category")}
          className="w-full border-b px-3 py-2 outline-none"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-900 text-white px-5 py-2 rounded hover:scale-95 transition"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="w-full sm:w-auto bg-red-900 text-white px-5 py-2 rounded hover:scale-95 transition"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  </div>
) : (
  <div className="text-center text-xl text-gray-500 py-10">Loading...</div>
);


};

export default SingleRecipe;
