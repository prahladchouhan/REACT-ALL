import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect, useState } from "react";

import { loadlazyproducts } from "../store/reducers/ProductSlice";
import InfiniteScroll from "react-infinite-scroll-component";
const ProductCard=lazy(()=>import("../component/ProductCard"))

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  // console.log(products)
  const users = useSelector((state) => state.userReducer.users);
  const [hasMore, sethasMore] = useState(true);
  const fetchproducts = async () => {
    try {
      const {data} = await axios.get(
        `/products?_limit=6&_start=${products.length}`
      );
      console.log(data);
      

      console.log(
        "Fetching from:",
        `/products?_limit=6&_start=${products.length}`
      );
      console.log(data);
      console.log("Fetched:", data.length);
      
      if (data.length === 0) {
        sethasMore(false);
        console.log("No more data!");
      } else {
        dispatch(loadlazyproducts(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchproducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {" "}
      <div className="  flex flex-wrap">
         {products.map((p, i) => (
        <Suspense key={i} fallback={<h1>LOADING...</h1>}>
          {<ProductCard p={p}/>}
        </Suspense>
         ))}
      </div>
    </InfiniteScroll>
  );
};

export default Products;
