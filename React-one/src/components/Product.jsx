import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = (name) => {
    navigate(`/product/details/${name}`);
  };

  return (
    <div className="text-2xl">
      <h1 className="text-4xl pt-10">Products</h1>
      <div>
        <h1 className="text-2xl pt-4 m-2">Product 1</h1>
        <button
          onClick={() => NavigateHandler("Product 1")}
          className="bg-amber-50 text-black p-2 mt-2 rounded-xl hover:scale-95 "
        >
          See Details
        </button>
        <hr className="mt-5" />
      </div>
      <div>
        <h1 className="text-2xl pt-4 m-2">Product 2</h1>
        <button
          onClick={() => NavigateHandler("Product 2")}
          className="bg-amber-50 text-black p-2 mt-2 rounded-xl hover:scale-95 "
        >
          See Details
        </button>
        <hr className="mt-5" />
      </div>
      <div>
        <h1 className="text-2xl pt-4 m-2">Product 3</h1>
        <button
          onClick={() => NavigateHandler("Product 3")}
          className="bg-amber-50 text-black p-2 mt-2 rounded-xl hover:scale-95"
        >
          See Details
        </button>
        <hr className="mt-5" />
      </div>
    </div>
  );
};

export default Product;
