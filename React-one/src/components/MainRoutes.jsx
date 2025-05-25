import Home from "../components/Home";
import Product from "../components/Product";
import About from "../components/About";
import Service from "../components/Service";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ServiceDetails from "./ServiceDetails";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/details/:name" element={<ProductDetails />} />

        <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetails />} />
        </Route>

        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
