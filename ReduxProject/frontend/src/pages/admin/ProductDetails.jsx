import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import {asyncdeleteproduct,asyncupdateproduct} from "../../store/actions/productAction";

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
        toast.error("Product deleted Successfully!")
        navigate("/products");
    };

    return product ? (
  // <div className="min-h-screen bg-gray-900 text-white p-6">
  //   {/* Product Display */}
  //   <div className="flex flex-col md:flex-row gap-6 mb-10">
  //     <img
  //       className="w-full md:w-1/2 h-auto rounded-lg object-cover"
  //       src={product.image}
  //       alt={product.title}
  //     />
  //     <div className="flex flex-col justify-center md:w-1/2">
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

  <div className="min-h-screen bg-gray-900 text-white p-6">
  {/* Product Display */}
  <div className="flex flex-col md:flex-row gap-6 mb-10 items-center">
    <img
      className="w-full md:w-[40%] max-w-sm rounded-lg object-cover"
      src={product.image}
      alt={product.title}
    />
    <div className="flex flex-col justify-center md:w-[60%] w-full">
      <h1 className="text-3xl md:text-5xl font-semibold text-blue-400 mb-2">
        {product.title}
      </h1>
      <h2 className="text-2xl text-green-400 mb-4">${product.price}</h2>
      <p className="text-gray-300 mb-6">{product.description}</p>
      <button className="w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
        🛒 Add to Cart
      </button>
    </div>
  </div>

  <hr className="border-gray-700 mb-10" />

  {/* Admin Form */}
  {users?.isAdmin && (
    <form
      onSubmit={handleSubmit(UpdateProductHandler)}
      className="max-w-2xl mx-auto flex flex-col gap-4"
    >
      <h3 className="text-xl font-semibold text-yellow-400 mb-2">
        Admin: Update Product
      </h3>
      <input
        {...register("image")}
        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="url"
        placeholder="Image URL"
      />
      <input
        {...register("title")}
        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Title"
      />
      <input
        {...register("price")}
        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="0.00"
      />
      <textarea
        {...register("description")}
        rows={4}
        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter description here..."
      ></textarea>
      <input
        {...register("category")}
        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Category"
      />

      <div className="flex gap-3 mt-2 flex-wrap">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
        >
          ✏️ Update Product
        </button>
        <button
          type="button"
          onClick={DeleteHandler}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition"
        >
          🗑️ Delete Product
        </button>
      </div>
    </form>
  )}
</div>

  
) : (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-lg">
    Loading...
  </div>
);

};

export default ProductDetails;