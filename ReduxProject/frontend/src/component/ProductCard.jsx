import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";
import { Link } from "react-router-dom";

// const ProductCard = () => {
//      const dispatch = useDispatch();
//   const products = useSelector((state) => state.productReducer.products);

//   const AddToCard = (product) => {
//     const copyuser = { ...users, cart: [...users.cart] };
//     const items = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

//     if (items == -1) {
//       copyuser.cart.push({ product, quantity: 1 });
//     } else {
//       copyuser.cart[items] = {
//         product,
//         quantity: copyuser.cart[items].quantity + 1,
//       };
//     }
//     dispatch(asyncupdateuser(copyuser.id, copyuser));
//   };

//   const renderproduct = products.map((product) => {
//     return (
//       <div
//         key={product.id}
//         className="w-full sm:w-[48%] m-2 justify-between  lg:w-[31%] bg-gray-800 text-white border border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
//       >
//         {/* Product Image */}
//         <img
//           className="w-full h-48 object-cover"
//           src={product.image}
//           alt={product.title}
//         />

//         {/* Product Content */}
//         <div className="p-4">
//           <h1 className="text-lg font-semibold text-blue-400 mb-1">
//             {product.title}
//           </h1>
//           <p className="text-sm text-gray-300 mb-3">
//             {product.description?.slice(0, 100)}...
//           </p>

//           {/* Price & Button */}
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-green-400 font-semibold">${product.price}</p>
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1 rounded-md transition"
//               onClick={() => AddToCard(product)}
//             >
//               🛒 Add to Cart
//             </button>
//           </div>

//           {/* More Info Link */}
//           <Link 
//             to={`/product/${product.id}`}
//             className="block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md text-sm transition"
//           >
//             🔍 More Info
//           </Link>
//         </div>
//       </div>
//     );
//   });
// };

// export default ProductCard;

const ProductCard = ({ p }) => {
   const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  const AddToCard = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const items = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

    if (items == -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[items] = {
        product,
        quantity: copyuser.cart[items].quantity + 1,
      };
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

    return (
        <div
            title={p.title}
            key={p.id}
            className="w-[31%] mr-3 mb-3 shadow-md p-1 rounded"
        >
            <img className="h-[30vh] mx-auto block" src={p.image} alt="" />
            <h1 className="mt-3 text-2xl">{p.title.slice(0, 15)}...</h1>
            <p className="text-red-400">{p.price}</p>
            <p>{p.description.slice(0, 80)}...</p>
            <div className="mt-2 p-2 w-full flex justify-between items-center">
                <button>Add to Cart</button>
                <Link to={`/product-info/${p.id}`}>More Info</Link>
            </div>
        </div>
    );
};
export default ProductCard