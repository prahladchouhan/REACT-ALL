import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadlazyproducts } from "../store/reducers/ProductSlice";
import ProductCard from "../component/ProductCard"; // No lazy loading now

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
 
  const fetchproducts = async () => {
    try {
      const res = await axios.get("/products"); // Full product fetch
      const data = Array.isArray(res.data) ? res.data : res.data.products || [];
      dispatch(loadlazyproducts(data));
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchproducts(); 
  }, []);

  return (
    <div className="flex flex-wrap  gap-4 px-2">
      
        <ProductCard  />
      
    </div>
  );
};

export default Products;


