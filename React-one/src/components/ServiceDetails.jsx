import {useNavigate } from "react-router-dom";

const ServiceDetails = () => {
 
    const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="text-4xl pt-4 m-2 font-bold text-amber-300 p-2 rounded-2xl ">
         
        </h1>
        <h1 className="text-2xl pt-4 m-4">choose as ...</h1>
        <button
         onClick={()=>navigate(-1)}
          className="bg-amber-50 text-black p-2 m-4 rounded-xl hover:scale-95 font-semibold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
