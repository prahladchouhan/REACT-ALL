import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipesContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate=useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipes) => {
    recipes.id = nanoid();
    const copydata = [...data];
    copydata.push(recipes);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("new recipe created!");
    reset();
    navigate("/recipes");
  };

  // return (
  //   <div className=" w-22vw  m-10 justify-between flex items-center  border -2 p-2">
  //     <div className="">
  //       <h1 className="text-amber-200 bg-gray-500 w-150 justify-center flex p-5">
  //         Add Recipe!
  //       </h1>
  //       <img
  //         className=" h-[100%]"
  //         src="https://plus.unsplash.com/premium_vector-1737047236495-4efe6101f0a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlJTIwZm9ybXxlbnwwfHwwfHx8MA%3D%3D"
  //       />
  //     </div>
  //     <form
  //       className="  w-200  p-5 rounded-2xl  "
  //       onSubmit={handleSubmit(submitHandler)}
  //     >
  //       <div className="flex gap-20 items-center  p-2">
  //         <label className="text-gray-700">URL</label>
  //         <input
  //           {...register("image")}
  //           type="url"
  //           placeholder="Enter image URL"
  //           className="block  border-b-2 px-10  outline-0 mt-1.5"
  //         />
  //         {/* <small className="text-red-700">invalid data !</small> */}
  //       </div>
  //       <div className="flex gap-20 items-center  p-2">
  //         <label className="text-gray-700">Title</label>
  //         <input
  //           {...register("title")}
  //           type="text"
  //           placeholder="Enter Recipe Title"
  //           className="block  border-b-2 px-10 outline-0 mt-1.5"
  //         />
  //       </div>
  //       <div className="flex gap-20 items-center  p-2">
  //         <label className="text-gray-700">Chef</label>
  //         <input
  //           type="text"
  //           {...register("chef")}
  //           placeholder="Enter Chef Name"
  //           className="block  border-b-2 px-10  outline-0 mt-1.5"
  //         />
  //       </div>
  //       <div className="flex gap-20 items-center  p-2">
  //         <label className="text-gray-700">Desc:</label>
  //         <textarea
  //           type="text"
  //           {...register("desc")}
  //           placeholder="//Enter Descrption!"
  //           className="block  border-b-2 px-10  outline-0 mt-1.5 h-10 "
  //         ></textarea>
  //       </div>
  //       <div className="flex gap-20 items-center  p-2">
  //         <label className="text-gray-700">Ingr:</label>
  //         <textarea
  //           {...register("ingr")}
  //           type="text"
  //           placeholder="//Enter ingredients!"
  //           className="block  border-b-2 px-10  outline-0 mt-1.5 h-10 "
  //         ></textarea>
  //       </div>
  //       <div className="flex gap-20 items-center  p-2">
  //         <label className="text-gray-700">Instr:</label>
  //         <textarea
  //           {...register("inst")}
  //           type="text"
  //           placeholder="//Enter Instruction!"
  //           className="block  border-b-2 px-10  outline-0 mt-1.5 h-10 "
  //         ></textarea>
  //       </div>
  //       <div className="flex gap-20 items-center  p-2">
  //         <select
  //           className="block  outline-0 font-extrabold mt-1.5"
  //           {...register("category")}
  //         >
  //           <option value="breakfast">Breakfast</option>
  //           <option value="lunch">Lunch</option>
  //           <option value="dinner">Dinner</option>
  //         </select>
  //       </div>
  //       <button className="block px-4 py-2 mt-4.5 rounded-xl text-amber-50 hover:scale-95 items-center bg-gray-700">
  //         Save Recipe
  //       </button>
  //     </form>
  //   </div>
  // );

return (
  <div className="flex flex-col lg:flex-row gap-6 items-center justify-center p-6">
    {/* Left Section - Title & Illustration */}
    <div className="w-full lg:w-1/3 text-center">
      <h1 className="text-xl md:text-2xl font-bold text-amber-200 bg-gray-600 rounded-xl py-3 mb-4">
        Add Recipe!
      </h1>
      <img
        className="w-full h-[250px] object-cover rounded-xl shadow-md"
        src="https://plus.unsplash.com/premium_vector-1737047236495-4efe6101f0a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlJTIwZm9ybXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Recipe Illustration"
      />
    </div>

    {/* Right Section - Form */}
    <form
      className="w-full lg:w-2/3 bg-white shadow-md rounded-2xl p-6"
      onSubmit={handleSubmit(submitHandler)}
    >
      {/* Field: Image URL */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Image URL</label>
        <input
          {...register("image")}
          type="url"
          placeholder="Enter image URL"
          className="w-full border-b-2 px-3 py-2 outline-none"
        />
      </div>

      {/* Field: Title */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Title</label>
        <input
          {...register("title")}
          type="text"
          placeholder="Enter Recipe Title"
          className="w-full border-b-2 px-3 py-2 outline-none"
        />
      </div>

      {/* Field: Chef */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Chef</label>
        <input
          {...register("chef")}
          type="text"
          placeholder="Enter Chef Name"
          className="w-full border-b-2 px-3 py-2 outline-none"
        />
      </div>

      {/* Field: Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Description</label>
        <textarea
          {...register("desc")}
          placeholder="Enter Description"
          className="w-full border-b-2 px-3 py-2 outline-none h-16 resize-none"
        ></textarea>
      </div>

      {/* Field: Ingredients */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Ingredients</label>
        <textarea
          {...register("ingr")}
          placeholder="Enter ingredients"
          className="w-full border-b-2 px-3 py-2 outline-none h-16 resize-none"
        ></textarea>
      </div>

      {/* Field: Instructions */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Instructions</label>
        <textarea
          {...register("inst")}
          placeholder="Enter instructions"
          className="w-full border-b-2 px-3 py-2 outline-none h-16 resize-none"
        ></textarea>
      </div>

      {/* Field: Category */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Category</label>
        <select
          {...register("category")}
          className="w-full px-3 py-2 outline-none border rounded-md"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-gray-700 text-amber-50 px-6 py-2 rounded-xl hover:scale-95 transition duration-300"
        >
          Save Recipe
        </button>
      </div>
    </form>
  </div>
);


};

export default Create;
