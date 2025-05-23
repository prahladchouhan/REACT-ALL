import { createContext } from "react";
import { useState } from "react"; 
export const todocontext=createContext(null);

 

const Wrapper = (props) => {
    const [todos, settodos] = useState([
        { id: 1, title: "Kamm krle bhai", isCompleted: false },
    ]);
    return (
    <div>
        <todocontext.Provider value={ [todos, settodos]}>
            {props.children}
        </todocontext.Provider>
    </div>
  )
}

export default Wrapper;
