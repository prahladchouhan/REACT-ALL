// import { Link } from "react-router-dom";

// const RecipeCard = (props) => {
//   const { id, image, title, desc, chef } = props.recipe;
//   return (
//     <Link
//       to={`/recipes/details/${id}`}
//       className=" mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow bg-amber-200 p-10 m-5"
//     >
//       <img
//         className="duration-800 hover:scale-95 object-cover w-full h-[40vh] rounded-4xl"
//         src={image}
//         alt=""
//       />
//       <h1 className="px-2 mt-2 font-black ">{title}</h1>
//       <small className="px-2  text-blue-950">{chef}</small>
//       <p className="px-2 pb-3 text-sm text-red-400">
//         {desc.slice(0, 100)}... <small className="text-blue-400">more</small>
//       </p>
//     </Link>
//   );
// };

// export default RecipeCard;

import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] bg-amber-200 rounded-lg shadow-md overflow-hidden m-2 transform hover:scale-[0.98] transition duration-300"
    >
      {/* Recipe Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 object-cover"
      />

      {/* Card Body */}
      <div className="p-4">
        <h2 className="text-xl font-extrabold mb-1 text-gray-800">{title}</h2>
        <p className="text-sm text-blue-950 font-medium mb-2">By {chef}</p>

        <p className="text-sm text-red-500 leading-snug">
          {desc.slice(0, 100)}...{" "}
          <span className="text-blue-500 font-semibold">more</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
