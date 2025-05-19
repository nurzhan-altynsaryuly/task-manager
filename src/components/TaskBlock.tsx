import TaskItem from "./TaskItem";

import { Task } from "../models/Task";

import { TaskStatus } from "../models/TaskStatus";

import { FC } from "react";

interface TaskBlockProps {
  block: string;
  data: Task[] | undefined;
}

const TaskBlock: FC<TaskBlockProps> = ({ block, data }) => {
  return (
    <div className="p-5 bg-gray-700 rounded-md text-amber-50 font-bold">
      <p className="font-['Inter']">
        {block == TaskStatus.OPEN
          ? "Open"
          : block == TaskStatus.PROGRESS
          ? "In Progress"
          : "Done"}
      </p>
      {data?.filter((task: Task) => task.status == block).length ? (
        data
          .filter((task: Task) => task.status == block)
          .map((task: Task) => <TaskItem key={task.id} data={task} />)
      ) : (
        <p className="font-normal mt-5">There are no tasks!</p>
      )}
    </div>
  );
};

export default TaskBlock;
