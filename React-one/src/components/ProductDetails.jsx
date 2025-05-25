import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {

  const navigate=useNavigate(); 
  const para=useParams(); 
  return (
    <div>
      <div>
        <h1 className="text-4xl pt-4 m-2 font-bold text-amber-300 p-2 rounded-2xl ">{para.name}</h1>
        <h1 className="text-2xl pt-4 m-4">product details ...</h1>
        <button onClick={()=>navigate(-1)} className="bg-amber-50 text-black p-2 m-4 rounded-xl hover:scale-95 font-semibold">Go Back</button>

      </div>
    </div>
  )
}

export default ProductDetails;
