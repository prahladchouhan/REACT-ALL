import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;

    let copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

      toast.success("Todo created!");
    reset();
   
  };
  return (
    <div className="bg-red-300 p-10 rounded-xl border w-[60%]">
      <h1 className=" text-[50px] text-gray-700 font-medium text-start m-5">
        Create Tasks
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
         className="border p-4 w-full text-xl outline-none rounded-xl bg-gray-300 "
          {...register("title", { required: "title can't be empty" })}
          type="text"
          placeholder="title"
        />
        <small className="font-semibold text-xl text-amber-950  ">
          {errors?.title?.message}
        </small>

        <br />
        <br />
        <button className=" border rounded-xl p-3 hover:bg-sky-500 font-medium text-sky-50 bg-sky-600 text-xl text-gray ">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
