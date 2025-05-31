import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipesContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
    const { data, setdata } = useContext(recipecontext);
    const navigate = useNavigate();
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
        },
    });

    const SubmitHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...recipe };
        setdata(copydata);
        toast.success("Recipe updated!");
        
    };

    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id);
        setdata(filterdata);
        toast.success("recipe deleted!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className=" w-90% flex gap-0.5 m-5 p-2 ">
            <div className="left w-1/2 p-4  ">
                <h1 className="text-4xl font-black py-4  ">{recipe.title}</h1>
                <img className="h-[40vh] w-100 rounded-3xl" src={recipe.image} alt="" />
                <h1 className="text-blue-950 font-bold p-4 border-b-2">Chef Name: {recipe.chef}</h1>
                <p className="px-2 pb-3 text-2xl">{recipe.desc}</p>
            </div>
            <div className="w-1/2 p-4 ">
                 <form className=" p-5 border-2 rounded-4xl mx-30 " onSubmit={handleSubmit(SubmitHandler)}>
                <input
                    className="block border-b outline-0  "
                    {...register("image")}
                    type="url"
                    placeholder="Enter Image Url"
                />
                <small className="text-red-400">
                    This is how the error is shown
                </small>
                <input
                    className="block border-b outline-0 p-2"
                    {...register("title")}
                    type="text"
                    placeholder="Recipe Title"
                />
                <input
                    className="block border-b outline-0 p-2"
                    {...register("chef")}
                    type="text"
                    placeholder="Chef Name"
                />

                <textarea
                    value={recipe.desc}
                    className="block border-b outline-0 p-2"
                    {...register("desc")}
                    placeholder="//start from here"
                ></textarea>

                <textarea
                    className="block border-b outline-0 p-2"
                    {...register("ingr")}
                    placeholder="//write ingredients seperated by comma"
                ></textarea>

                <textarea
                    className="block border-b outline-0 p-2"
                    {...register("inst")}
                    placeholder="//write instructions seperated by comma"
                ></textarea>

                <select
                    className="block border-b outline-0 p-2"
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <div className="flex gap-10 font-medium text-amber-50">
                    <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
                    Update Recipe
                </button>
                <button
                    onClick={DeleteHandler}
                    className="mt-5 block bg-red-900 px-4 py-2 rounded"
                >
                    Delete Recipe
                </button>
                </div>
            </form>
            </div>

           
        </div>
    ) : (
        "Loading..."
    );
};


export default SingleRecipe
