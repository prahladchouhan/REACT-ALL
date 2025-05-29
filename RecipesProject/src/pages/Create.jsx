import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipesContext";


const Create = () => {
 const {data,setdata}=useContext(recipecontext);
  const {register, handleSubmit, reset }=useForm()

  const submitHandler=(recipes)=>{
    recipes.id=nanoid();
    setdata([...data,recipes])
    reset();
  }

  return (
    <div className="m-10 flex flex-col justify-center items-center  p-2">
      <h1 className="text-amber-200 bg-gray-500 w-100 justify-center flex">
        Add Recipe!
      </h1>
      <form className="  rounded-2xl px-4 py-2" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex gap-20 items-center border-b-1 p-2">
          {/* <label className="text-gray-700">URL</label> */}
          <input
           {...register("image")}
            type="url"
            placeholder="Enter image URL"
            className="block px-4 py-2 border-b-2 outline-0 mt-1.5"
          />
          {/* <small className="text-red-700">invalid data !</small> */}
        </div>
        <div className="flex gap-20 items-center border-b-1 p-2">
          {/* <label className="text-gray-700">Title</label> */}
          <input
           {...register("title")}  
            type="text"
            placeholder="Enter Recipe Title"
            className="block px-4 py-2 border-b-2 outline-0 mt-1.5"
          />
        </div>
        <div className="flex gap-20 items-center border-b-1 p-2">
          {/* <label className="text-gray-700">Chef</label> */}
          <input
            type="text"
            {...register("chef")}
            placeholder="Enter Chef Name"
            className="block px-4 py-2 border-b-2 outline-0 mt-1.5"
          />
        </div>
        <div className="flex gap-20 items-center border-b-1 p-2">
          {/* <label className="text-gray-700">Description</label> */}
          <textarea
            type="text"
           {...register("description")}
            placeholder="//Enter Descrption!"
            className="block px-4 py-2 border-b-2 outline-0 mt-1.5 h-15 "
          ></textarea>
          </div>
          <div className="flex gap-20 items-center border-b-1 p-2">
             {/* <label className="text-gray-700">Ingredients</label> */}
          <textarea
           {...register("ingredients")}
            type="text"
            placeholder="//Enter ingredients!"
            className="block px-4 py-2 border-b-2 outline-0 mt-1.5 h-15 "
          ></textarea>
        </div>
        <div className="flex gap-20 items-center border-b-1 p-2">
          {/* <label className="text-gray-700">Instruction</label> */}
          <textarea
           {...register("instructions")}
            type="text"
            placeholder="//Enter Instruction!"
            className="block px-4 py-2 border-b-2 outline-0 mt-1.5 h-15 "
          ></textarea>
        </div>
        <div className="flex gap-20 items-center border-b-1 p-2">
          {/* <label className="text-gray-700">Category</label> */}
          <select className="block px-4 py-2 outline-0 font-extrabold mt-1.5"
           {...register("category")}
          >
            <option>Veg</option>
            <option>Non-veg</option>
          </select>
        </div>
        <button className="block px-4 py-2  mt-4.5 rounded-xl text-amber-50 hover:scale-95 items-center bg-gray-700">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
