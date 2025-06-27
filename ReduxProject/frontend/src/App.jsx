import { useDispatch, useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { asynccurrentuser } from "./store/actions/userAction";
import { useEffect } from "react";
import { asyncloadproducts } from "./store/actions/productAction";
import { Users } from "lucide-react";

const App = () => {
  // user loading..
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users]);
  useEffect(() => {
    products.length == 0 && dispatch(asyncloadproducts());
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-4">
        <MainRoutes />
      </main>
    </div>
  );
};

export default App;
