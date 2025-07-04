import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/actions/productAction";
import { asyncupdateuser } from "../../store/actions/userAction";

const ProductDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    toast.error("Product deleted Successfully!");
    navigate("/products");
  };
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

  return product ? (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mb-14 items-start">
        <div className="w-full md:w-[40%] bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-700">
          <img
            className="w-full h-[400px] object-contain rounded-lg"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="w-full md:w-[60%]">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4 leading-tight">
            {product.title}
          </h1>
          <p className="text-green-400 text-2xl font-semibold mb-4">
            ${product.price}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-4 pl-4 border-blue-500 italic">
            {product.description}
          </p>
          <button
            onClick={() => AddToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium text-sm transition shadow-md"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      <hr className="border-gray-700 mb-12" />
      {users?.isAdmin && (
        <div className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            Admin Panel: Update Product
          </h3>
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="flex flex-col gap-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                {...register("image")}
                type="url"
                placeholder="Image URL"
                className="bg-gray-900 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                {...register("title")}
                type="text"
                placeholder="Title"
                className="bg-gray-900 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                {...register("price")}
                type="number"
                placeholder="0.00"
                className="bg-gray-900 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                {...register("category")}
                type="text"
                placeholder="Category"
                className="bg-gray-900 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <textarea
              {...register("description")}
              rows={4}
              placeholder="Enter product description..."
              className="bg-gray-900 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            <div className="flex flex-wrap gap-4 justify-end mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-md text-sm transition shadow-md"
              >
                ✏️ Update Product
              </button>
              <button
                type="button"
                onClick={DeleteHandler}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md text-sm transition shadow-md"
              >
                🗑️ Delete Product
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  ) : (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-lg">
      Loading...
    </div>
  );
};

export default ProductDetails;
