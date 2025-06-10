import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../PageNotFound";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/createProduct";
import ProductDetails from"../pages/admin/ProductDetails";
const MainRoutes = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

         <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
