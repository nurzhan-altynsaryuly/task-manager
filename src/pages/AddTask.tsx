import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTaskMutation } from "../store/apiSlice";
import { Task } from "../models/Task";

const AddTask: FC = () => {
  const [input, setInput] = useState<string>("");
  const [select, setSelect] = useState<string>("Arthur Morgan");
  const [danger, setDanger] = useState<boolean>(false);
  const [createTask, { isLoading }] = useCreateTaskMutation();

  const navigate = useNavigate();

  async function addTask() {
    if (input.length < 2) {
      setDanger(true);
      setTimeout(() => setDanger(false), 3000);
      return;
    }

    const task: Task = {
      id: Date.now(),
      task: input,
      user: select,
      status: "open",
    };

    try {
      await createTask(task).unwrap();
      setInput("");
      navigate("/");
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
    }
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Link to="/">
        <p className="text-amber-50 hover:cursor-pointer underline">Back</p>
      </Link>
      <div className="flex justify-center items-center flex-col gap-2">
        <p className='text-3xl text-amber-50 text-center font-bold font-["Inter"]'>
          Create Task
        </p>
        {danger && (
          <p className="text-xs font-['Inter'] text-red-300 font-light">
            Please, type your task!
          </p>
        )}
        <input
          type="text"
          placeholder="Type your task"
          className="w-100 bg-amber-50 px-5 py-2 rounded-xs outline-none font-['Inter']"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <select
          className="bg-amber-50 px-5 py-2 outline-none w-100 rounded-xs hover:cursor-pointer"
          onChange={(e) => setSelect(e.target.value)}
          value={select}
        >
          <option>Arthur Morgan</option>
          <option>John Marston</option>
        </select>
        <button
          onClick={addTask}
          className="bg-blue-200 w-100 px-5 py-2 outline-none rounded-xs hover:cursor-pointer hover:bg-blue-100 transition-all duration-300"
        >
          Create Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
