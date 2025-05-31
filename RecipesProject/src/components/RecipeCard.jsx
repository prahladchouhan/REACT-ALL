import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow bg-amber-200 p-10 m-5"
    >
      <img className="duration-800 hover:scale-95 object-cover w-full h-[40vh] rounded-4xl" src={image} alt="" />
      <h1 className="px-2 mt-2 font-black ">{title}</h1>
      <small className="px-2  text-blue-950">{chef}</small>
      <p className="px-2 pb-3 text-sm text-red-400">
        {desc.slice(0, 100)}... <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
