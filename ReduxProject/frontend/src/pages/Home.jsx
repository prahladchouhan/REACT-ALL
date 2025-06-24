import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  // const user = useSelector((state) => state.userReducer.users);
  // console.log(user + " from the home page");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Welcome to ReduxKart 🛒
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Shop confidently with secure payments and trusted products.
Enjoy amazing deals across every category — from fashion to electronics and more.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-medium transition"
          >
            🛍️ Shop Now
          </Link>

         
              {/* <Link
                to="/login"
                className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-md text-sm font-medium transition"
              >
                🔑 Login
              </Link>
             */}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          🔥 Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={`https://picsum.photos/400/300?random=${id}`}
                alt="product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-blue-400 font-semibold mb-1">
                  Product #{id}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  A short and sweet product description goes here.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">$19.99</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1 rounded-md transition">
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
