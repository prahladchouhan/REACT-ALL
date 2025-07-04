import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

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
  const total = users?.cart?.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  const cartlist = users?.cart?.map((o, i) => (
    <div
      key={i}
      className="flex flex-col m-4 md:flex-row items-center gap-4 justify-between bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm hover:shadow-md transition"
    >
      <img
        className="w-24 h-24 object-cover rounded-md"
        src={o.product.image}
        alt={o.product.title}
      />
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-bold text-blue-200">{o.product.title}</h2>
        <p className="text-md text-green-500 font-semibold mt-1">
          ₹{o.product.price}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
          onClick={() => DecQuanity(i)}
        >
          ➖
        </button>
        <span className="text-lg font-bold">{o.quantity}</span>
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
          onClick={() => IncQuanity(i)}
        >
          ➕
        </button>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 rounded-xl">
      <h1 className="text-3xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
        🛒 Your Cart
      </h1>
      {users?.cart?.length > 0 ? (
        <>
          <div className="flex flex-col gap-4">{cartlist}</div>
          <div className="mt-10 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-md max-w-xl mx-auto">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-green-400">₹{total.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium transition">
              ✅ Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-400 mt-10 text-lg">
          🛒 Your cart is empty...
        </p>
      )}
    </div>
  );
};

export default Cart;

