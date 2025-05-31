import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section>
        <div className="flex gap-1.5 overflow-auto justify-evenly ">
          <img
            className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
            src="https://images.unsplash.com/photo-1562923690-e274ba919781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
            src="https://images.unsplash.com/photo-1566312235254-d4b52d8fb053?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
            src="https://plus.unsplash.com/premium_photo-1673830185086-8d54f4c0f3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
            src="https://images.unsplash.com/photo-1710091691777-3115088962c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="w-70 h-100 object-cover duration-600 rounded-xl hover:scale-98"
            src="https://images.unsplash.com/photo-1679710496121-be65bc80ab2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        </section>
        <section className="p-4">
          <h1 className="text-3xl text-center p-2">🍽️About Us</h1>
          <hr />
          <p className="text-xl text-red-400 p-10 font-mono m-20  rounded-2xl bg-white">
            Welcome to <b>RecipeHub</b>, the ultimate destination for food
            lovers and home cooks! Our platform is more than just a recipe hub —
            it’s a vibrant community where you can explore mouthwatering recipes
            from around the world and share your own creations with fellow
            foodies. Whether you’re looking for quick weekday meals, traditional
            family dishes, or something completely new, our collection offers
            something for every taste. Each recipe is easy to follow,
            beautifully presented, and made to inspire confidence in the kitchen
            — no matter your experience level. But we don’t stop there. At{" "}
            <b>RecipeHub</b>, you’re part of the kitchen too. Got a recipe you
            love? Share it with the world! Our upload feature lets you add your
            own recipes, complete with ingredients, steps, and images. Your dish
            could be the next big favorite! We believe food brings people
            together, and this website is built to celebrate that connection. So
            come cook, share, and grow with us — one recipe at a time.
          </p>
           <Link
        to="/recipes"
        className=" block text-xl py-2 px-4 mx-150 hover:mx-160 text-center rounded-2xl bg-gray-700 text-amber-50  duration-700"
      >
        Recipe
      </Link>
    
       
      </section>
     </div>
  );
};

export default About;
