import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "Kamm krle bhai", isCompleted: false },
    ]);
    return (
        <div className="w-screen h-screen bg-green-200 p-10 flex text-center gap-10">
            <Create todos={todos} settodos={settodos} />
            <Read todos={todos} settodos={settodos} />
        </div>
    );
};
export default App;