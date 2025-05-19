import { FC, ReactNode } from "react";


interface TaskBlockListProps {
  children: ReactNode;
}

const TaskBlockList: FC<TaskBlockListProps> = ({ children }) => {
  return (
    <div className="w-full h-max mt-10 grid grid-cols-3 gap-7">{children}</div>
  );
};

export default TaskBlockList;
