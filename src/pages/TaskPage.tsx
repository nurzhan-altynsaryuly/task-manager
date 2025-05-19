import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTaskMutation } from "../store/apiSlice";
import { useChangeTaskMutation } from "../store/apiSlice";
import { Task } from "../models/Task";

const TaskPage = () => {
  const data: Task = useLocation().state;
  const [status, setStatus] = useState<string>(data.status);
  const [deleteTask] = useDeleteTaskMutation();
  const [changeTask] = useChangeTaskMutation();

  const navigate = useNavigate();

  const optionStatus = async () => {
    try {
      const newData: Task = {
        id: data.id,
        task: data.task,
        user: data.user,
        status: data.status,
      };
      await changeTask(newData).unwrap();
      navigate("/");
    } catch (e) {
      console.error("Ошибка при изменении задачи", e);
    }
  };

  const deleteItem = async () => {
    try {
      await deleteTask(data.id).unwrap();
      navigate("/");
    } catch (e) {
      console.error("Ошибка при удалении задачи", e);
    }
  };

  return (
    <>
      <Link to="/">
        <p className="text-amber-50 hover:cursor-pointer underline w-max">
          Back
        </p>
      </Link>
      <div className="flex flex-col gap-2 justify-center items-center w-100 m-auto">
        <div className="px-5 py-2 outline-none w-100 rounded-xs text-amber-50 border-b-2 border-solid flex gap-5">
          <p className="font-bold">Task:</p>
          <p>{data.task}</p>
        </div>
        <div className="px-5 py-2 outline-none w-100 rounded-xs text-amber-50 border-b-2 border-solid flex gap-5">
          <p className="font-bold">User:</p>
          <p>{data.user}</p>
        </div>
        <select
          className="bg-amber-50 px-5 py-2 outline-none w-100 rounded-xs hover:cursor-pointer"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="open">Open</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <div className="grid grid-cols-2 gap-3 w-full">
          <button
            onClick={optionStatus}
            className="bg-blue-200 w-full px-5 py-2 outline-none rounded-xs hover:cursor-pointer hover:bg-blue-100 transition-all duration-300"
          >
            Save
          </button>
          <button
            onClick={deleteItem}
            className="bg-red-200 w-full px-5 py-2 outline-none rounded-xs hover:cursor-pointer hover:bg-red-100 transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
