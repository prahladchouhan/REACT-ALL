import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderproduct = products.map((product) => {
    return (
  <div
    key={product.id}
    className="w-full sm:w-[48%] lg:w-[31%] bg-gray-800 text-white border border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
  >
    {/* Product Image */}
    <img
      className="w-full h-48 object-cover"
      src={product.image}
      alt={product.title}
    />

    {/* Product Content */}
    <div className="p-4">
      <h1 className="text-lg font-semibold text-blue-400 mb-1">
        {product.title}
      </h1>
      <p className="text-sm text-gray-300 mb-3">
        {product.description.slice(0, 100)}...
      </p>

      {/* Price & Button */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-green-400 font-semibold">${product.price}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1 rounded-md transition">
          🛒 Add to Cart
        </button>
      </div>

      {/* More Info Link */}
      <Link
        to={`/product/${product.id}`}
        className="block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md text-sm transition"
      >
        🔍 More Info
      </Link>
    </div>
  </div>
);
  });

  return products.length > 0 ? ( <div className=" overflow-auto flex flex-wrap">{renderproduct}</div>
  ) : (
    "Loading..."
  );
};

export default Products;
