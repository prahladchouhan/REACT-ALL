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
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);
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

    // if (existingIndex === -1) {
    //   updatedUser.cart.push({ product, quantity: 1 });
    // } else {
    //   updatedUser.cart[existingIndex].quantity += 1;
    // }
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
    // <div className="min-h-screen bg-gray-900 text-white p-6">
    //   {/* Product Display */}
    //   <div className="flex flex-col md:flex-row gap-6 mb-10 items-center">
    //     <img
    //       className="w-full md:w-[40%] max-w-sm rounded-lg object-cover"
    //       src={product.image}
    //       alt={product.title}
    //     />
    //     <div className="flex flex-col justify-center md:w-[60%] w-full">
    //       <h1 className="text-3xl md:text-5xl font-semibold text-blue-400 mb-2">
    //         {product.title}
    //       </h1>
    //       <h2 className="text-2xl text-green-400 mb-4">${product.price}</h2>
    //       <p className="text-gray-300 mb-6">{product.description}</p>
    //       <button className="w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
    //         🛒 Add to Cart
    //       </button>
    //     </div>
    //   </div>

    //   <hr className="border-gray-700 mb-10" />

    //   {/* Admin Form */}
    //   {users?.isAdmin && (
    //     <form
    //       onSubmit={handleSubmit(UpdateProductHandler)}
    //       className="max-w-2xl mx-auto flex flex-col gap-4"
    //     >
    //       <h3 className="text-xl font-semibold text-yellow-400 mb-2">
    //         Admin: Update Product
    //       </h3>
    //       <input
    //         {...register("image")}
    //         className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         type="url"
    //         placeholder="Image URL"
    //       />
    //       <input
    //         {...register("title")}
    //         className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         type="text"
    //         placeholder="Title"
    //       />
    //       <input
    //         {...register("price")}
    //         className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         type="number"
    //         placeholder="0.00"
    //       />
    //       <textarea
    //         {...register("description")}
    //         rows={4}
    //         className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         placeholder="Enter description here..."
    //       ></textarea>
    //       <input
    //         {...register("category")}
    //         className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         type="text"
    //         placeholder="Category"
    //       />

    //       <div className="flex gap-3 mt-2 flex-wrap">
    //         <button
    //           type="submit"
    //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
    //         >
    //           ✏️ Update Product
    //         </button>
    //         <button
    //           type="button"
    //           onClick={DeleteHandler}
    //           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition"
    //         >
    //           🗑️ Delete Product
    //         </button>
    //       </div>
    //     </form>
    //   )}
    // </div>
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Product Display Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mb-14 items-start">
        {/* Product Image */}
        <div className="w-full md:w-[40%] bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-700">
          <img
            className="w-full h-[400px] object-contain rounded-lg"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
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

      {/* Admin Panel */}
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
