import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);
  const AddToCart = (product) => {
    const updatedUser = { ...users, cart: [...(users.cart || [])] };
    const existingIndex = updatedUser.cart.findIndex(
      (c) => c?.product?.id === product.id
    );
    if (existingIndex === -1) {
      updatedUser.cart.push({ product, quantity: 1 });
    } else {
      const existingItem = updatedUser.cart[existingIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedUser.cart = [
        ...updatedUser.cart.slice(0, existingIndex),
        updatedItem,
        ...updatedUser.cart.slice(existingIndex + 1),
      ];
    }

    dispatch(asyncupdateuser(updatedUser.id, updatedUser));
  };

  return (
    <div className="flex flex-wrap  gap-4 px-4 py-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-[48%] lg:w-[31%] bg-gray-800 text-white border border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <img
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-blue-400 mb-1">
              {product.title}
            </h1>
            <p className="text-sm text-gray-300 mb-3">
              {product.description?.slice(0, 100)}...
            </p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-green-400 font-semibold"> ₹{product.price}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1 rounded-md transition"
                onClick={() => AddToCart(product)}
              >
                🛒 Add to Cart
              </button>
            </div>
            <Link
              to={`/product/${product.id}`}
              className="block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md text-sm transition"
            >
              🔍 More Info
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
