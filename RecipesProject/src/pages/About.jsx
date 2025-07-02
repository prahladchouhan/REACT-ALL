// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <div>
//       <section>
//         <div className="flex gap-1.5 overflow-auto justify-evenly ">
//           <img
//             className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
//             src="https://images.unsplash.com/photo-1562923690-e274ba919781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
//             alt=""
//           />
//           <img
//             className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
//             src="https://images.unsplash.com/photo-1566312235254-d4b52d8fb053?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
//             alt=""
//           />
//           <img
//             className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
//             src="https://plus.unsplash.com/premium_photo-1673830185086-8d54f4c0f3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
//             alt=""
//           />
//           <img
//             className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
//             src="https://images.unsplash.com/photo-1710091691777-3115088962c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
//             alt=""
//           />
//           <img
//             className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
//             src="https://images.unsplash.com/photo-1679710496121-be65bc80ab2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
//             alt=""
//           />
//         </div>
//         </section>
//         <section className="p-4">
//           <h1 className="text-3xl text-center p-2">🍽️About Us</h1>
//           <hr />
//           <p className="text-xl text-red-400 p-10 font-mono m-20  rounded-2xl bg-white">
//             Welcome to <b>RecipeHub</b>, the ultimate destination for food
//             lovers and home cooks! Our platform is more than just a recipe hub —
//             it’s a vibrant community where you can explore mouthwatering recipes
//             from around the world and share your own creations with fellow
//             foodies. Whether you’re looking for quick weekday meals, traditional
//             family dishes, or something completely new, our collection offers
//             something for every taste. Each recipe is easy to follow,
//             beautifully presented, and made to inspire confidence in the kitchen
//             — no matter your experience level. But we don’t stop there. At{" "}
//             <b>RecipeHub</b>, you’re part of the kitchen too. Got a recipe you
//             love? Share it with the world! Our upload feature lets you add your
//             own recipes, complete with ingredients, steps, and images. Your dish
//             could be the next big favorite! We believe food brings people
//             together, and this website is built to celebrate that connection. So
//             come cook, share, and grow with us — one recipe at a time.
//           </p>
//            <Link
//         to="/recipes"
//         className=" block text-xl py-2 px-4 mx-150 hover:mx-160 text-center rounded-2xl bg-gray-700 text-amber-50  duration-700"
//       >
//         Recipe
//       </Link>
    
       
//       </section>
//      </div>
//   );
// };

// export default About;

import { Link } from "react-router-dom";


  const imageList = [
    "https://images.unsplash.com/photo-1562923690-e274ba919781?w=600",
    "https://images.unsplash.com/photo-1566312235254-d4b52d8fb053?w=600",
    "https://plus.unsplash.com/premium_photo-1673830185086-8d54f4c0f3a8?w=600",
    "https://images.unsplash.com/photo-1710091691777-3115088962c4?w=600",
    "https://images.unsplash.com/photo-1679710496121-be65bc80ab2c?w=600",
    // "https://images.unsplash.com/photo-1628711594843-e420787a3afa?w=600",
  ];


const About = () => {
  return (
    <div className="flex flex-col">
      {/* Image Slider Bar */}
       <section className="w-full bg-white py-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
            {imageList.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`recipe-${index}`}
                className="w-[200px] h-[200px] object-cover rounded-xl hover:scale-95 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="px-4 sm:px-8 md:px-16 py-6">
        <h1 className="text-3xl text-center p-2">🍽️ About Us</h1>
        <hr className="mb-4" />
        <p className="text-lg sm:text-xl text-red-400 font-mono bg-white rounded-2xl p-6 leading-relaxed shadow-sm">
          Welcome to <b>RecipeHub</b>, the ultimate destination for food lovers
          and home cooks! Our platform is more than just a recipe hub — it’s a
          vibrant community where you can explore mouthwatering recipes from
          around the world and share your own creations with fellow foodies.
          Whether you’re looking for quick weekday meals, traditional family
          dishes, or something completely new, our collection offers something
          for every taste. Each recipe is easy to follow, beautifully presented,
          and made to inspire confidence in the kitchen — no matter your
          experience level. But we don’t stop there. At <b>RecipeHub</b>, you’re
          part of the kitchen too. Got a recipe you love? Share it with the
          world! Our upload feature lets you add your own recipes, complete with
          ingredients, steps, and images. Your dish could be the next big
          favorite! We believe food brings people together, and this website is
          built to celebrate that connection. So come cook, share, and grow with
          us — one recipe at a time.
        </p>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <Link
            to="/recipes"
            className="inline-block text-lg px-6 py-2 bg-gray-700 text-amber-50 rounded-2xl hover:scale-105 duration-300"
          >
            View Recipes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

