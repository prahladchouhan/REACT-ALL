import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productAction";

const CreateProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product);
        dispatch(asynccreateproduct(product));
        navigate("/products");
    };
    // return (
    //     <form
    //         onSubmit={handleSubmit(CreateProductHandler)}
    //         className="flex flex-col w-1/2 justify-start items-start"
    //     >
    //         <input
    //             {...register("image")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="url"
    //             placeholder="image url"
    //         />
    //         <input
    //             {...register("title")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="text"
    //             placeholder="title"
    //         />
    //         <input
    //             {...register("price")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="number"
    //             placeholder="0.00"
    //         />
    //         <textarea
    //             {...register("description")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             placeholder="enter description here..."
    //         ></textarea>
    //         <input
    //             {...register("category")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="text"
    //             placeholder="category"
    //         />
    //         <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
    //             Create Product
    //         </button>
    //     </form>
    // );
    return (
  <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="flex flex-col w-full max-w-2xl gap-4 bg-gray-800 p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">Create New Product</h2>

      <input
        {...register("image")}
        className="bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="url"
        placeholder="Image URL"
      />
      <input
        {...register("title")}
        className="bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Title"
      />
      <input
        {...register("price")}
        className="bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="0.00"
      />
      <textarea
        {...register("description")}
        className="bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        placeholder="Enter description here..."
      ></textarea>
      <input
        {...register("category")}
        className="bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Category"
      />

      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
      >
        ➕ Create Product
      </button>
    </form>
  </div>
);

};

export default CreateProduct;