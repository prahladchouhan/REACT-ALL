import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* body  */}
      <section >
      <div className="w-[100%] h-[100%] flex justify-between ">
        <h1 className="text-5xl p-30 font-sans w-[50%] h-[50%]">
          <p>The Daily Dish</p>
          <p className="text-xl text-red-400 mt-5 pl-5 pt-5">
            Discover delicious, easy-to-follow recipes for every occasion! From
            quick meals to gourmet dishes, our site brings flavors from around
            the world right to your kitchen. Cook, enjoy, and share!
          </p>
          <Link to="/recipes" className="text-xl py-2 px-4 rounded-2xl border-b-2 hover:scale-95">Recipe</Link>
        </h1>
        <img
          className="w-[50%] h-[50%]"
          src="https://images.unsplash.com/photo-1659354217586-c5931b31e4c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWklMjByZWNpcGVzfGVufDB8fDB8fHww"
        ></img>
      </div>

      <div className="w-[100%] h-[100%] flex justify-between ">
        <img
          className="w-[50%] h-[50%]"
          src="https://images.unsplash.com/photo-1695837390040-ea8077f56205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHVpJTIwcmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
        ></img>
        <h1 className="text-5xl p-30 font-sans w-[50%] h-[50%]">
          <p>Spice & Slice</p>
          <p className="text-xl text-red-400 mt-5 pl-5 pt-5">
            Craving something delicious? Dive into a world of flavors with our
            handpicked recipes! From comfort food to exotic eats, we make
            cooking fun, easy, and irresistibly tasty.
          </p>
          <Link to="/recipes" className="text-xl py-2 px-4 rounded-2xl  border-b-2 hover:scale-95">Recipe</Link>
        </h1>
      </div>
    </section>
      </div>
  );
};

export default Home;
