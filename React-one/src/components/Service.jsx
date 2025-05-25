import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="text-2xl">
      <h1 className="text-4xl pt-10">Service</h1>
      <button
        onClick={() => navigate("/service/detail")}
        className="bg-amber-50 text-black p-2 m-4 rounded-xl hover:scale-95 font-semibold"
      >
        More service
      </button>
      <hr/>
      <Outlet/>
    </div>
  );
};

export default Service;
