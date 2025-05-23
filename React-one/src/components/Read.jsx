import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";

const Read = () => {
      const [todos, settodos] = useContext(todocontext);



    const DeleteHandler =(id)=>{
        const filtedtodo=todos.filter((todos)=>todos.id!=id);
        settodos(filtedtodo);   
        toast.error("Deleted!")
    };

    const rendertodos = todos.map((todo) => {
        return (
            <li  key={todo.id} className="p-2 text-sky-100 bg-sky-600 m-1 rounded-xl flex flex-clo justify-between">
                {todo.title} {" "}
                <span onClick={()=>DeleteHandler(todo.id)}
                    className="p-1 text-sky-100 bg-red-800  rounded-xl "
                    >Delete</span>

            </li>
        );
    });


    return (
        <div className=" bg-red-300 p-10 rounded-sm border w-[40%]">
            <h1 className="text-center text-[50px] text-gray-700 font-medium m-5">Pending Todos</h1>
            <ol className="text-start p-5 text-red-900  border rounded-xl text-[20px] ">{rendertodos}</ol>
        </div>
    );
};

export default Read;