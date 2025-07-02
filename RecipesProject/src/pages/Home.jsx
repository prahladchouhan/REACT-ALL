import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const getproduct = async () => {
        try {
          console.log("s")
        } catch (error) {
            console.log(error);
        }
    };



  // return (
  //   <div>
  //     {/* body  */}
  //     <section >
  //     <div className="w-[100%] h-[100%] flex justify-between ">
  //       <h1 className="text-5xl p-30 font-sans w-[50%] h-[50%]">
  //         <p>The Daily Dish</p>
  //         <p className="text-xl text-red-400 mt-5 pl-5 pt-5">
  //           Discover delicious, easy-to-follow recipes for every occasion! From
  //           quick meals to gourmet dishes, our site brings flavors from around
  //           the world right to your kitchen. Cook, enjoy, and share!
  //         </p>
  //         <Link to="/recipes" className="text-xl py-2 px-4 rounded-2xl border-b-2 hover:scale-95">Recipe</Link>
  //       </h1>
  //       <img
  //         className="w-[50%] h-[50%]"
  //         src="https://images.unsplash.com/photo-1659354217586-c5931b31e4c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWklMjByZWNpcGVzfGVufDB8fDB8fHww"
  //       ></img>
  //     </div>

  //     <div className="w-[100%] h-[100%] flex justify-between ">
  //       <img
  //         className="w-[50%] h-[50%]"
  //         src="https://images.unsplash.com/photo-1695837390040-ea8077f56205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHVpJTIwcmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
  //       ></img>
  //       <h1 className="text-5xl p-30 font-sans w-[50%] h-[50%]">
  //         <p>Spice & Slice</p>
  //         <p className="text-xl text-red-400 mt-5 pl-5 pt-5">
  //           Craving something delicious? Dive into a world of flavors with our
  //           handpicked recipes! From comfort food to exotic eats, we make
  //           cooking fun, easy, and irresistibly tasty.
  //         </p>
  //         <Link to="/recipes" className="text-xl py-2 px-4 rounded-2xl  border-b-2 hover:scale-95">Recipe</Link>
  //       </h1>
  //     </div>
  //   </section>
  //     <div>
  //           <h1>Home</h1>
  //           <button onClick={getproduct}>Get Products</button>
  //       </div>
  //     </div>
  // );

 return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full px-4 py-8 space-y-12">
        {/* First Block */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Daily Dish</h1>
            <p className="text-lg text-red-400 mb-6">
              Discover delicious, easy-to-follow recipes for every occasion! From quick meals
              to gourmet dishes, our site brings flavors from around the world right to your kitchen.
              Cook, enjoy, and share!
            </p>
            <Link
              to="/recipes"
              className="inline-block text-xl  animate-bounce py-2 px-6 rounded-2xl border-b-2 border-gray-800 hover:scale-95 transition"
            >
              Recipe
            </Link>
          </div>

          {/* Image */}
          <img
            className="w-full lg:w-1/2 h-auto rounded-xl shadow-md object-cover"
            src="https://images.unsplash.com/photo-1659354217586-c5931b31e4c6?w=600&auto=format&fit=crop&q=60"
            alt="Recipe Visual 1"
          />
        </div>

        {/* Second Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Image */}
          <img
            className="w-full lg:w-1/2 h-auto rounded-xl shadow-md object-cover"
            src="https://images.unsplash.com/photo-1695837390040-ea8077f56205?w=600&auto=format&fit=crop&q=60"
            alt="Recipe Visual 2"
          />

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Spice & Slice</h1>
            <p className="text-lg text-red-400 mb-6">
              Craving something delicious? Dive into a world of flavors with our
              handpicked recipes! From comfort food to exotic eats, we make
              cooking fun, easy, and irresistibly tasty.
            </p>
            <Link
              to="/recipes"
              className="inline-block text-xl animate-bounce py-2 px-6 rounded-2xl border-b-2 border-gray-800 hover:scale-95 transition"
            >
              Recipe
            </Link>
          </div>
        </div>
      </section>

      {/* Debug / Dev Buttons */}
      <div className="text-center mt-10">
        <button
          onClick={getproduct}
          className="bg-gray-700 text-white px-6 py-2 rounded-2xl hover:scale-90 transition"
        >
          Get Products
        </button>
      </div>
    </div>
  );
  
    

};

export default Home;
