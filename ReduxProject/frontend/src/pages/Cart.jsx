import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // const product = useSelector((state) => state.productReducer.products);

  const IncQuanity = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };
  const DecQuanity = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (copyuser.cart[index].quantity <= 1) {
      copyuser.cart.splice(index, 1);
    } else {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const cartlist = users?.cart?.map((o, i) => {
    return (
 
    <div
        key={i}
        className="flex flex-col m-4 md:flex-row items-center gap-4 justify-between bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm hover:shadow-md transition"
      >
        <img
          className="w-30 h-30 object-cover rounded-md"
          src={o.product.image}
          alt={o.product.title}
        />

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-200 ">
            {o.product.title}
          </h2>
          <p className="text-m text-green-500  font-bold mt-1">
            ${o.product.price}
          </p>{" "}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
            onClick={() => DecQuanity(i)}
          >
            ➖
          </button>
          <span className="text-lg font-bold">{o.quantity}</span>
          <button
            className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
            onClick={() => IncQuanity(i)}
          >
            ➕
          </button>
        </div>
      </div>
   
    );
  });
  return <div className="">{cartlist}</div>;
};

export default Cart;
