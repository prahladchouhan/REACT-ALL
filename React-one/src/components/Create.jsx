import { nanoid } from "nanoid";

import { useState } from "react";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false,
        };

        let copytodos = [...todos];
        copytodos.push(newtodo);
        settodos(copytodos);

        // settodos([...todos, newtodo])
        settitle("");
        
    };
    return (
        <div className="bg-red-300 p-10 rounded-xl border w-[60%]">
            <h1 className="text-center text-[50px] text-gray-700 font-medium text-start m-5">Create Tasks</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                    className="border p-4 w-full text-xl outline-none rounded-xl bg-gray-300 "
                    required
                />
                <br />
                <br />
                <button className=" border rounded-xl p-3 hover:bg-sky-500 font-medium text-sky-50 bg-sky-600 text-xl text-gray " >Create Todo</button>
            </form>
        </div>
    );
};

export default Create;