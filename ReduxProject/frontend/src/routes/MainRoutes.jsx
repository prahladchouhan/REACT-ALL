import { Route, Routes } from "react-router-dom";
import{lazy} from "react";
import { useSelector } from "react-redux";
const Home=lazy(()=>import("../pages/Home"));
const PageNotFound=lazy(()=>import("../PageNotFound"));
const Products=lazy(()=>import("../pages/Products"));
const Login=lazy(()=>import("../pages/Login"));
const Register=lazy(()=>import("../pages/Register"));
const CreateProduct=lazy(()=>import("../pages/admin/createProduct"));
const ProductDetails=lazy(()=>import("../pages/admin/ProductDetails"));
const AuthWrapper=lazy(()=>import("./AuthWrapper"));
const UserProfile=lazy(()=>import("../pages/user/UserProfile"));
const UnauthWrapper=lazy(()=>import("./UnauthWrapper"));
const Cart=lazy(()=>import("../pages/Cart"));

const MainRoutes = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/login"
          element={
            <UnauthWrapper>
              <Login />
            </UnauthWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <UnauthWrapper>
              <Register />
            </UnauthWrapper>
          }
        />
        <Route
          path="/admin/create-product"
          element={
            <AuthWrapper>
              <CreateProduct />
            </AuthWrapper>
          }
        />
        <Route
          path="/admin/user-profile"
          element={
            <AuthWrapper>
              <UserProfile />
            </AuthWrapper>
          }
        />
        <Route
          path="/product/:id"
          element={
            <AuthWrapper>
              <ProductDetails />
            </AuthWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
